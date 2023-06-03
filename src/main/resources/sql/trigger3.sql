CREATE OR REPLACE FUNCTION calculate_distance()
    RETURNS TRIGGER AS $$
DECLARE
    sender_lat DECIMAL;
    sender_lng DECIMAL;
    receiver_lat DECIMAL;
    receiver_lng DECIMAL;
    calc_distance DECIMAL;
BEGIN
    -- Pobierz współrzędne sendera
    SELECT s.latitude, s.longitude INTO sender_lat, sender_lng
    FROM "_order" o
             JOIN sender s ON o.sender_id = s.id
    WHERE o.id = NEW.id;

    -- Pobierz współrzędne receivera
    SELECT r.latitude, r.longitude INTO receiver_lat, receiver_lng
    FROM "_order" o
             JOIN receiver r ON o.receiver_id = r.id
    WHERE o.id = NEW.id;

    -- Oblicz odległość między punktami
    SELECT
            2 * 6371 * ASIN(
                SQRT(
                            POWER(SIN(RADIANS(receiver_lat - sender_lat) / 2), 2) +
                            COS(RADIANS(sender_lat)) * COS(RADIANS(receiver_lat)) * POWER(SIN(RADIANS(receiver_lng - sender_lng) / 2), 2)
                    )
            )
    INTO calc_distance;

    -- Aktualizuj odległość w rekordzie Delivery
    UPDATE delivery
    SET distance = calc_distance,
    delivery_hours = calc_distance / 50
    WHERE id = NEW.delivery_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER calculate_distance_trigger
    AFTER INSERT ON "_order"
    FOR EACH ROW
EXECUTE FUNCTION calculate_distance();
