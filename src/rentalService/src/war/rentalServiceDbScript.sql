CREATE TABLE vehicle (
    vehicle_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    mileage DECIMAL(10, 2),
    weight_load DECIMAL(10, 2),
    color VARCHAR(50),
    engine_cc INT,
    location VARCHAR(100),
    rent_price_per_day DECIMAL(10, 2),
    rent_price_per_month DECIMAL(10, 2),
    img_path VARCHAR(100),
    is_rented BOOLEAN,
    is_inspected BOOLEAN,
	created_by_id INT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO vehicle (name,mileage,weight_load,color,engine_cc,location,rent_price_per_day,rent_price_per_month,img_path,is_rented,is_inspected) 
VALUES ('cr 1', 15000.50, 2000.00, 'Blue', 2500, 'Mumbai', 75.00, 1500.00, '/images/vehicle_1', false, true),
('cr 2', 15000.50, 2000.00, 'Blue', 2500, 'Mumbai', 75.00, 1500.00, '/images/vehicle_1', false, true),
('cr 3', 15000.50, 2000.00, 'Blue', 2500, 'Mumbai', 75.00, 1500.00, '/images/vehicle_2', false, true),
('cr 4', 15000.50, 2000.00, 'Blue', 2500, 'Pune', 75.00, 1500.00, '/images/vehicle_3', false, true),
('cr 5', 15000.50, 2000.00, 'Blue', 2500, 'Pune', 75.00, 1500.00, '/images/vehicle_4', false, true),
('cr 6', 15000.50, 2000.00, 'Blue', 2500, 'Lucknow', 75.00, 1500.00, '/images/vehicle_5', false, true),
('cr 7', 15000.50, 2000.00, 'Blue', 2500, 'Lucknow', 75.00, 1500.00, '/images/vehicle_6', false, true),
('cr 8', 15000.50, 2000.00, 'Blue', 2500, 'Lucknow', 75.00, 1500.00, '/images/vehicle_7', false, true),
('cr 9', 15000.50, 2000.00, 'Blue', 2500, 'Mumbai', 75.00, 1500.00, '/images/vehicle_8', false, true),
('cr 10', 15000.50, 2000.00, 'Blue', 2500, 'Mumbai', 75.00, 1500.00, '/images/vehicle_9', false, true),
('cr 11', 15000.50, 2000.00, 'Blue', 2500, 'Pune', 75.00, 1500.00, '/images/vehicle_10', false, true),
('cr 12', 15000.50, 2000.00, 'Blue', 2500, 'Pune', 75.00, 1500.00, '/images/vehicle_11', false, true)