CREATE OR REPLACE FUNCTION calculate_distance(
    sender_latitude DOUBLE PRECISION,
    sender_longitude DOUBLE PRECISION,
    receiver_latitude DOUBLE PRECISION,
    receiver_longitude DOUBLE PRECISION
) RETURNS DOUBLE PRECISION AS $$
DECLARE
    x DOUBLE PRECISION;
    y DOUBLE PRECISION;
    distance DOUBLE PRECISION;
    earth_radius DOUBLE PRECISION := 6371; -- Earth radius in kilometers
BEGIN
    -- Convert to radians
    sender_latitude := radians(sender_latitude);
    sender_longitude := radians(sender_longitude);
    receiver_latitude := radians(receiver_latitude);
    receiver_longitude := radians(receiver_longitude);

    -- Calculate the difference in longitude and latitude
    x := (receiver_longitude - sender_longitude) * cos((sender_latitude + receiver_latitude) / 2);
    y := receiver_latitude - sender_latitude;

    -- Calculate the distance
    distance := sqrt(x * x + y * y) * earth_radius;

    RETURN distance;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION calculate_delivery_duration()
    RETURNS TRIGGER AS $$
DECLARE
    sender_latitude DOUBLE PRECISION;
    sender_longitude DOUBLE PRECISION;
    receiver_latitude DOUBLE PRECISION;
    receiver_longitude DOUBLE PRECISION;
    delivery_duration INTEGER;
    drone_speed FLOAT := 50; -- Constant drone speed (50 km/h)
BEGIN
    -- Get sender's location data
    SELECT latitude, longitude
    INTO sender_latitude, sender_longitude
    FROM Sender
    WHERE id = (SELECT sender_id FROM "_order" WHERE id = NEW.id);

    -- Get receiver's location data
    SELECT latitude, longitude
    INTO receiver_latitude, receiver_longitude
    FROM Receiver
    WHERE id = (SELECT receiver_id FROM "_order" WHERE id = NEW.id);

    -- Calculate the distance between sender and receiver locations in kilometers
    SELECT
        CEIL(calculate_distance(sender_latitude, sender_longitude, receiver_latitude, receiver_longitude) / drone_speed / 24)
    INTO delivery_duration;

    -- Assign the calculated value to the delivery_days column in the delivery table
    NEW.delivery_days := delivery_duration;

    -- Update the delivery record with the calculated delivery duration and distance
    UPDATE Delivery
    SET delivery_days = NEW.delivery_days, distance = calculate_distance(sender_latitude, sender_longitude, receiver_latitude, receiver_longitude)
    WHERE id = NEW.id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER calculate_delivery_duration_trigger
    AFTER INSERT ON Delivery
    FOR EACH ROW
EXECUTE FUNCTION calculate_delivery_duration();
