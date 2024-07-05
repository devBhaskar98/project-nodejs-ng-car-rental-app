CREATE TABLE vehicles (
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
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by_id INT,
    last_updated_by_id INT,
    last_updated_dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);