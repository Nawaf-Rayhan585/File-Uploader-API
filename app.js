const express = require('express');
const cors = require('cors');
const router = require('./src/routes/api.js')

const app = new express();

app.use(cors());
app.use(express.json({ limit: '500mb' }));

app.use('/api', router);
app.use('/uploads-file', express.static('uploads'));

module.exports = app;