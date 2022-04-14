const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  console.log('in shelf.router GET');

  const query = 'SELECT * FROM "item" ORDER BY "id" DESC'
  
  pool.query(query)
  .then(result => {
  console.log(result.rows);
  res.sendStatus(200);
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
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  const queryText =   `DELETE FROM "item" a 
                      USING "user" b 
                      WHERE a."user_id" = b."id" AND 
                      a."id" = $1 AND
                      b."username" = $2`;
  const queryValues = [req.params.id, req.user.username];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200);})
    .catch((err) => {
      console.log('Error in DELETE', err);
      res.sendStatus(500);
    });
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
