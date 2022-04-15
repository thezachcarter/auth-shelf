const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  //console.log('in shelf.router GET');

  const query = `SELECT
  a."username",
  b."id",
  b."description",
  b."image_url"
  FROM "user" a, "item" b
  WHERE a."id" = b."user_id"
  ORDER BY b."id" DESC`;
  
  pool.query(query)
  .then(result => {
  //console.log(result.rows);
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
router.delete('/:id', (req, res) => {``
  // endpoint functionality
  console.log( 'log from delete',req.params.id, req.user.id, req.user);
  const queryText =   `DELETE FROM "item" a 
                      WHERE a."user_id" = $1 AND 
                      a."id" = $2;`;
  const queryValues = [req.user.id, req.params.id];
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
