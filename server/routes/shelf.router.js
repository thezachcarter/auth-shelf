const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  console.log('in shelf.router GET');

  const query = `SELECT * FROM "item" 
  JOIN "user" ON "user".id = "item".user_id
  ORDER BY "item".id DESC;`;
  
  pool.query(query)
  .then(result => {
  console.log(result.rows);
  res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR in shelf.router GET', err);
  })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality

  const query = 
  'INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3)'

  pool.query(query, [req.body.description, req.body.image_url, req.user.id])
  .then(result => {
    res.sendStatus(201)
  }).catch(err => {
    console.log('error in shelf.router POST', err);
    res.sendStatus(500)
  })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
