const e = require("express");
const { Pool } = require("pg");

const connectionString = "postgres://postgres:docker@localhost:5432/hopcamp";
const pool = new Pool({ connectionString: connectionString });
//Insert Fake locations into the db
(async () => {
  try {
    const client = await pool.connect();

    const { default: campersAlsoViewed } = await import(
      "./generate_campers_also_viewed.js"
    );

    //Insert the fake locations into the db
    await Promise.all(
      campersAlsoViewed.map(async (fakeLocaions) => {
        const query = `INSERT INTO campers_also (description, pic_url, rating, num_of_ratings, acres, location, price) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        const values = [
          fakeLocaions.description,
          fakeLocaions.pic_url,
          fakeLocaions.rating,
          fakeLocaions.num_of_ratings,
          fakeLocaions.acres,
          fakeLocaions.location,
          fakeLocaions.price,
        ];
        //Execute the query
        await client.query(query, values);
      })
    );
    //Release the client back to the pool
    client.release();

    console.log("Fake locations inserted successfully");
  } catch (error) {
    console.error("Failed to insert fake locations:", error);
  } finally {
    pool.end();
  }
})();
