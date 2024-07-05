CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    profile_img VARCHAR(255),
    user_type ENUM('owner', 'user', 'admin') DEFAULT 'user'
);


INSERT INTO user (name, email, address, profile_img, user_type) 
VALUES ('Bhaskar Dixit', 'devBhaskar@tor.com', '654 Cedar Dr, Somewhere, IL 13579', '/images/profile_4.jpg', 'admin'),
    ('John Doe', 'john.doe@example.com', '123 Main St, Anytown, CA 12345', '/images/profile_3.jpg', 'owner'),
    ('Jane Smith', 'jane.smith@example.com', '456 Oak Ave, Sometown, NY 67890', '/images/profile_2.jpg', 'user'),
    ('Alice Johnson', 'alice.johnson@example.com', '789 Elm St, Anycity, TX 54321', NULL, 'user'),
    ('Bob Brown', 'bob.brown@example.com', '321 Pine Rd, Anotherplace, FL 98765', '/images/profile_1.jpg', 'owner'),
    ('Eve Wilson', 'eve.wilson@example.com', '654 Cedar Dr, Somewhere, IL 13579', '/images/profile_2.jpg', 'user');