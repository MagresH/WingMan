CREATE OR REPLACE FUNCTION calculate_delivery_hours()
    RETURNS TRIGGER AS $$
BEGIN
    -- Pobierz prędkość dostawy z tabeli drone



    -- Oblicz czas dostawy w godzinach
    NEW.delivery_hours = NEW.distance / 50;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER calculate_delivery_hours_trigger
    BEFORE INSERT ON delivery
    FOR EACH ROW
EXECUTE FUNCTION calculate_delivery_hours();
