-- works
CREATE OR REPLACE FUNCTION assign_random_location_to_drone()
RETURNS TRIGGER AS $$
DECLARE
random_index INTEGER;
    random_latitude DOUBLE PRECISION;
    random_longitude DOUBLE PRECISION;
    random_locations DOUBLE PRECISION[][];
BEGIN
    -- Definiuj trzy losowo wybrane lokalizacje
    random_locations := ARRAY[
        ARRAY[12.345, 67.890],
        ARRAY[98.765, 43.210],
        ARRAY[45.678, 23.456]
    ];

    -- Wybierz losowy indeks z zakresu 1 do 3
    random_index := 1 + (RANDOM() * 3)::INTEGER;

    -- Przypisz losowe wartości latitude i longitude dronowi
    random_latitude := random_locations[random_index][1];
    random_longitude := random_locations[random_index][2];

    -- Ustaw lokalizację drona
    NEW.latitude := random_latitude;
    NEW.longitude := random_longitude;

RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER assign_random_location_trigger
    BEFORE INSERT ON drone
    FOR EACH ROW
    EXECUTE FUNCTION assign_random_location_to_drone();