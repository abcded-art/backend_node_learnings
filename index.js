const express = require('express')
const bodyParser = require('body-parser')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const sampleData = {
  "Name": "",
  "Age": 0,
  "Address": ""
};

const test1 = {
  "Name": "Ethan",
  "Age": 27,
  "Address": "Seoul"
};

const datas = [test1];

/**
 * @swagger
 * /:
 *    get:
 *      summary: Get all data
 *      responses
 * 
 */

app.get("/", (req, res) => {
  res.json(datas);
})

app.get("/name", (req, res) => {
  res.json(datas.map(data => data.Name));
})

app.get("/age", (req, res) => {

})

app.get("/address", (req, res) => {

})

app.post("/", (req, res) => {

})