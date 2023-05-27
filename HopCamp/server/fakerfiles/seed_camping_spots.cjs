const e = require("express");
const { Pool } = require("pg");

const connectionString = "postgres://postgres:docker@localhost:5432/hopcamp";
const pool = new Pool({ connectionString: connectionString });
//Insert Fake locations into the db
(async () => {
  try {
    const client = await pool.connect();

    const { default: campersAlsoViewed } = await import(
      "./generate_camping_spots.js"
    );

    //Insert the fake locations into the db
    await Promise.all(
      campersAlsoViewed.map(async (fakeSpots) => {
        const query = `INSERT INTO camping_spot (description, pic_url, rating, num_of_ratings, acres, location, price) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        const values = [
          fakeSpots.description,
          fakeSpots.pic_url,
          fakeSpots.rating,
          fakeSpots.num_of_ratings,
          fakeSpots.acres,
          fakeSpots.location,
          fakeSpots.price,
        ];
        //Execute the query
        await client.query(query, values);
      })
    );
    //Release the client back to the pool
    client.release();

    console.log("Fake camping spots inserted successfully");
  } catch (error) {
    console.error("Failed to insert fake camping spots:", error);
  } finally {
    pool.end();
  }
})();
