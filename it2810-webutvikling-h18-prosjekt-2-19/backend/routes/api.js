/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();
const mysql = require('mysql');
const request = require('request');
const urllib = require('url');
const showdown = require('showdown');

const details = {
  host: '127.0.0.1',
  user: 'ntnu',
  password: 'kakekake',
  database: 'it2810',
  table: 'readme'
};

// API home page
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// GET /api/entries
//  Get all entries
//  Result: [{ id, author, name, url, timestamp, content, content_html }]
router.get('/entries', (req, res, next) => {
  const con = mysql.createConnection(details);
  const { table } = details;

  con.connect((err) => {
    if (err) console.log(err);

    con.query(`SELECT * from ${table}`, (error, result) => {
      if (err) console.log(err);
      res.json(result);
    });
  });
});

// GET /api/entries/[id]
//  Get a single entry by ID
//  Result: { id, author, name, url, timestamp, content, content_html }
router.get('/entries/:id([0-9]+)', (req, res, next) => {
  const con = mysql.createConnection(details);
  const { id } = req.params;
  const { table } = details;

  con.connect((err) => {
    if (err) console.log(err);

    // Sanitize input
    const sanId = con.escape(id);

    con.query(`SELECT * from ${table} WHERE id=${sanId}`, (error, result) => {
      if (err) console.log(err);
      res.json(result[0]);
    });
  });
});

// GET /api/entries/author/[author]
//  Get all entries from an author
//  Result: [{ id, author, name, url, timestamp, content, content_html }]
router.get('/entries/author/:author([a-z]+)', (req, res, next) => {
  const con = mysql.createConnection(details);
  const { table } = details;
  const { author } = req.params;

  con.connect((err) => {
    if (err) console.log(err);

    // Sanitize input
    const sanAuthor = con.escape(author);

    con.query(`SELECT * from ${table} WHERE author=${sanAuthor}`, (error, result) => {
      if (err) console.log(err);
      res.json(result);
    });
  });
});

// POST /api/entries
//  Add an entry to the database.
//  JSON data: { url }
router.post('/entries', (req, res, next) => {
  const { url } = req.body;
  const u = new urllib.URL(url);
  const { table } = details;

  // Assumes the URL is on the form 'example.com/username/title/...'
  const user = u.pathname.split('/')[1];
  const title = u.pathname.split('/')[2];

  request(url, (err, response, body) => {
    if (err) {
      response.end('Url HTTP error');
    }

    const converter = new showdown.Converter();
    const htmlText = converter.makeHtml(body);

    // Save to database
    const con = mysql.createConnection(details);

    con.connect((error) => {
      if (err) console.log(err);

      // Sanitize input
      const sanTitle = con.escape(title);
      const sanBody = con.escape(body);
      const sanUser = con.escape(user);
      const sanHtml = con.escape(htmlText);
      const sanUrl = con.escape(url);

      con.query(
        `INSERT INTO ${table} (name, content, author, content_html, url) 
        VALUES (${sanTitle}, ${sanBody}, ${sanUser}, ${sanHtml}, ${sanUrl});`,
        (mysqlerror, result_) => {
          if (mysqlerror) {
            // Respond with error
            res.status(300).json({
              status: 'ERROR',
              result: result_,
              id: null
            });
          }
          try {
            // Respond with the row ID
            res.status(300).json({
              status: 'OK',
              id: result_.insertId,
              result: result_
            });
          } catch (typeError) {
            console.log(sanUrl);
            console.error(typeError);
          }
        }
      );
    });
  });
});

// GET /api/entries/search
//  Main search engine.
//  Optional URL parameters: query, after, before, author, sortby, page
//  Result: [{ id, author, name, url, timestamp, content, content_html }]
router.get('/entries/search', (req, res, next) => {
  const { table } = details;
  let {
    query, after, before, author, sortby, page
  } = req.query;
  let order = 'ASC';
  const pageLength = 5;

  if (!query) query = '';
  if (!after) after = '1980-01-01';
  if (!before) before = '2060-01-01';
  if (!author) author = '%';
  if (!page) page = '0';

  if (!sortby) {
    order = 'DESC';
    sortby = 'timestamp';
  }

  const con = mysql.createConnection(details);

  con.connect((err) => {
    if (err) console.log(err);

    // Sanitize input
    const sanQuery = con.escape(`%${query}%`);
    const sanAfter = con.escape(`${after} 00:00:00`);
    const sanBefore = con.escape(`${before} 00:00:00`);
    const sanAuthor = con.escape(author);
    const sanSortby = con.escape(sortby).replace(/'/g, ''); // Remove ' from this one
    const sanPage = parseInt(page, 10) * pageLength;

    const sqlQuery = `SELECT * from ${table} WHERE (content LIKE ${sanQuery} OR name LIKE ${sanQuery}) AND author LIKE ${sanAuthor} AND timestamp > ${sanAfter} AND timestamp < ${sanBefore} ORDER BY ${sanSortby} ${order} LIMIT ${sanPage},${pageLength}`;

    console.log(sqlQuery);

    con.query(sqlQuery, (error, result) => {
      if (err) console.log(err);
      res.json(result);
    });
  });
});

// GET /api/authors
//  Get all authors
//  Result: [{ author }]
router.get('/authors', (req, res, next) => {
  const con = mysql.createConnection(details);
  const { table } = details;

  con.connect((err) => {
    if (err) console.log(err);

    con.query(`SELECT DISTINCT author from ${table}`, (error, result) => {
      if (err) console.log(err);
      res.json(result);
    });
  });
});

module.exports = router;
