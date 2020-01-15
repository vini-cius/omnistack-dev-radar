const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema.js');

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    createIndexs: '2dsphere',
  },
});

module.exports = mongoose.model('Dev', DevSchema);
