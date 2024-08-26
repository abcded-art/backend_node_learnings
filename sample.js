const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(bodyParser.json());

// Sample Data
const sampleData = {
  Name: "",
  Age: 0,
  Address: ""
};

const test1 = {
  Name: "Ethan",
  Age: 27,
  Address: "Seoul"
};

const datas = [test1];

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all data
 *     responses:
 *       200:
 *         description: Returns all data
 */
app.get("/", (req, res) => {
  res.json(datas);
});

/**
 * @swagger
 * /name:
 *   get:
 *     summary: Get name data
 *     responses:
 *       200:
 *         description: Returns name
 */
app.get("/name", (req, res) => {
  res.json(datas.map(data => data.Name));
});

/**
 * @swagger
 * /age:
 *   get:
 *     summary: Get age data
 *     responses:
 *       200:
 *         description: Returns age
 */
app.get("/age", (req, res) => {
  res.json(datas.map(data => data.Age));
});

/**
 * @swagger
 * /address:
 *   get:
 *     summary: Get address data
 *     responses:
 *       200:
 *         description: Returns address
 */
app.get("/address", (req, res) => {
  res.json(datas.map(data => data.Address));
});

/**
 * @swagger
 * /:
 *   post:
 *     summary: Add new data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Age:
 *                 type: integer
 *               Address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
app.post("/", (req, res) => {
  const newData = req.body;
  datas.push(newData);
  res.status(201).json(newData);
});

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple API',
      version: '1.0.0',
      description: 'A simple API with sample data',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./app.js'], // Swagger 주석이 포함된 파일 경로
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 서버 시작
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});