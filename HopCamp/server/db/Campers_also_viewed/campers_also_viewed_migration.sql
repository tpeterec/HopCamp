DROP TABLE IF EXISTS campers_also CASCADE;

CREATE TABLE campers_also (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    pic_url TEXT,
    rating INTEGER NOT NULL,
    num_of_ratings INTEGER NOT NULL,
    acres INTEGER NOT NULL,
    location VARCHAR(40) NOT NULL,
    price INTEGER
);