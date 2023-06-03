-- works
CREATE OR REPLACE FUNCTION set_order_time()
    RETURNS TRIGGER AS $$
BEGIN
    NEW.order_time = CURRENT_TIMESTAMP;
    RETURN NEW;
END
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER set_order_time_trigger
    BEFORE INSERT ON public._order
    FOR EACH ROW
EXECUTE FUNCTION set_order_time();

