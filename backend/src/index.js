const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes.js');
const { setupWebsocket } = require('./websocket.js');

const connectionString = require('../credentials/database.json').connectionString

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(connectionString,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);