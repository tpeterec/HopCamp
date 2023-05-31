const e = require("express");
const { Pool } = require("pg");

const connectionString = "postgres://postgres:docker@localhost:5432/hopcamp";
const pool = new Pool({ connectionString: connectionString });
//Insert Fake locations into the db
(async () => {
  try {
    const client = await pool.connect();
    console.log("Connected");
    const { default: fakeCampingPhotos } = await import(
      "./generate_photo_gallery.js"
    );

    //Insert the fake locations into the db
    await Promise.all(
      fakeCampingPhotos.map(async (fakePhotos) => {
        const query = `INSERT INTO photos (pic, url) VALUES ($1, $2)`;
        const values = [fakePhotos.pic, fakePhotos.url];
        //Execute the query
        await client.query(query, values);
      })
    );
    //Release the client back to the pool
    client.release();

    console.log("Fake camping photos inserted successfully");
  } catch (error) {
    console.error("Failed to insert fake camping photos:", error);
  } finally {
    pool.end();
  }
})();
