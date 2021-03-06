'use strict';
const Pool = require('pg-pool');
const config = require('../config.json')
const { table, host, database, user, password, port } = config
const pool = new Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});

module.exports.getAdoptAPlot = (event, context, callback) => {

  const get = `SELECT * FROM adoptaplot`;

  pool.connect()
    .then(client => {
      client.release()
      return client.query(get)
    })
    .then(res => {

      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(res.rows),
      }

      callback(null, response);
    })
    .catch(error => {
      console.log('error', error)

      const response = {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(error)
      }
      callback(null, response);
    });
};

module.exports.getHuki = (event, context, callback) => {

  const get = `SELECT * FROM huki;`;

  pool.connect()
    .then(client => {
      client.release()
      return client.query(get)
    })
    .then(res => {

      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(res.rows),
      }

      callback(null, response);
    })
    .catch(error => {
      console.log('error', error)

      const response = {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(error)
      }
      callback(null, response);
    });
};

module.exports.getOrganizations = (event, context, callback) => {

  const get = `SELECT * FROM organization;`;

  pool.connect()
    .then(client => {
      client.release()
      return client.query(get)
    })
    .then(res => {

      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(res.rows),
      }

      callback(null, response);
    })
    .catch(error => {
      console.log('error', error)

      const response = {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(error)
      }
      callback(null, response);
    });
};