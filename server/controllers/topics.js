var mongoose = require('mongoose');
var _ = require('lodash');
var Topic = mongoose.model('Topic');
var mandrill = require('mandrill-api/mandrill');
var secrets = require('../config/secrets');
var mandrill_client = new mandrill.Mandrill(secrets.mandrill);
var fapaEmail = "shinsonh@gmail.com";

/**
 * List
 */
exports.all = function(req, res) {
  Topic.find({}).exec(function(err, topics) {
    if(!err) {
      res.json(topics);
    }else {
      console.log('Error in first query');
    }
  });
};

/**
 * Add a Topic
 */
exports.add = function(req, res) {
  var message = { 
    "html": "<p>請按下面網址確認您的案件通報 </p> <a href='https://nameistw.herokuapp.com/confirm/" + req.body.caseId + "'>Here</a>", 
    "text": "請按下面網址確認您的案件通報 https://nameistw.herokuapp.com/confirm/" + req.body.caseId, 
    "subject": "感謝您通報誤植台灣案件", 
    "from_email": "home@fapa.org", 
    "from_name": "FAPA", 
    "to": [{ "email": req.body.userEmail, "name": req.body.userName, "type": "to" }] 
  };
  var messageFAPA = { 
    "html": "<p>請按下面網址確認案件通報 並且寄出FAPA官方信函給該機構 </p> <a href='https://nameistw.herokuapp.com/confirm/" + req.body.caseId + "'>Click Here</a>", 
    "text": "請按下面網址確認案件通報 並且寄出FAPA官方信函給該機構 https://nameistw.herokuapp.com/confirm/" + req.body.caseId, 
    "subject": "收到誤植台灣國名案件通報", 
    "from_email": req.body.userEmail, 
    "from_name": req.body.userName, 
    "to": [{ "email": fapaEmail, "name": "FAPA", "type": "to" }] 
  };  
  // console.log('sending msg ' + req.body.organizationEmail);
  // console.log(message);
  mandrill_client.messages.send({"message": message}, 
  function(result) { console.log(result); }, function(e) { console.log(e)});
  mandrill_client.messages.send({"message": messageFAPA}, 
  function(result) { console.log(result); }, function(e) { console.log(e)});
  console.log(req.body);
  Topic.create(req.body, function (err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send('Added successfully');
  });
};

exports.confirm = function(req, res) {
  Topic.findOneAndUpdate({caseId: req.body.caseId}, {status: '等待驗證中..'}, function(err, data) {
      if(err) {
        console.log('Error on save!');
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
}

/**
 * Update a topic
 */
exports.update = function(req, res) {
  var query = { id: req.body.id };
  var isIncrement = req.body.isIncrement;
  var isFull = req.body.isFull;
  var omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  var data = _.omit(req.body, omitKeys);

  if(isFull) {
    Topic.findOneAndUpdate(query, data, function(err, data) {
      if(err) {
        console.log('Error on save!');
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  } else {
    Topic.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1: -1 } }, function(err, data) {
      if(err) {
        console.log('Error on save!');
        // Not sure if server status is the correct status to return
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  }
  
};

/**
 * 
 */
exports.increment = function(req, res) {
  var query = { id: req.body.id };
  
};

/**
 * Remove a topic
 */
exports.remove = function(req, res) {
  var query = { id: req.body.id };
  Topic.findOneAndRemove(query, function(err, data) {
    if(err) console.log('Error on delete');
    res.status(200).send('Removed Successfully');
  });
};