/**
 * Schema Definitions
 *
 */
var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
  caseId: String,
  organization: String,
  organizationEmail: String,
  situation: String,
  userName: String,
  userEmail: String,
  imgUrl: {type: String, default: 'http://www.ucarecdn.com/85d7241a-2aba-4c2b-940f-ac13b2949294/angrytextemoticonlargec42270.png'},
  url: {type: String, default: ''},
  status: { type: String, default: 'init'},
  count: { type: Number, min: 0 },
  date: { type: Date, default: Date.now }
});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Topic' collection in the MongoDB database
Topic = mongoose.model('Topic', TopicSchema);

