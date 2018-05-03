const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

app.get('/', (req, res) => {
  res.json({ message: `hello from lambda.` });
});
app.get('/greeting/:name', (req, res) => {
  res.json({ message: `hello, ${req.params.name}` });
});

module.exports = app;
