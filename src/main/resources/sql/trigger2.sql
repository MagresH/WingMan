-- works
CREATE OR REPLACE FUNCTION assign_drone_to_delivery()
  RETURNS TRIGGER AS $$
DECLARE
available_drone_id INT;
BEGIN
  -- Find an available drone that is not assigned to any other delivery
SELECT id INTO available_drone_id
FROM drone
WHERE is_assigned = FALSE
    LIMIT 1;

IF available_drone_id IS NOT NULL THEN
    -- Update the assigned drone for the newly created delivery
UPDATE delivery
SET drone_id = available_drone_id
WHERE id = NEW.id;

-- Update the is_assigned flag of the assigned drone
UPDATE drone
SET is_assigned = TRUE
WHERE id = available_drone_id;
END IF;

RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER assign_drone_to_delivery_trigger
    AFTER INSERT ON delivery
    FOR EACH ROW
    EXECUTE FUNCTION assign_drone_to_delivery();
