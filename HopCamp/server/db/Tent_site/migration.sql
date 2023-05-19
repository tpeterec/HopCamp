CREATE TABLE campsites (
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  available BOOLEAN,
  demand TEXT,
  instantBook BOOLEAN,
  descriptions VARCHAR,
  capacity INT,
  restrictions TEXT,
  amenities TEXT,
  price DECIMAL(8, 2),
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE lodging (
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  capacity INT,
  restrictions TEXT,
  amenities TEXT,
  price DECIMAL(8, 2),
  available BOOLEAN,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
