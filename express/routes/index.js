const express = require('express');
const { sessionChecker } = require('../middleware/auth');
const User = require('../models/users');

const router = express.Router();
// route for Home-Page

router.post('/fetch', async (req, res, next) => {   
  console.log(req.body.row);
  console.log(req.body.column); 
  const {row, column} =  req.body;

  const questions = [
    ["Product name", "What is a male raccoon called?", "What is a female raccoon called?", "Are raccoons herbivorous, carnivorous, or omnivorous?", "True or false?  Raccoons are nocturnal.", "True or false?  Raccoons hibernate."],
    ["Product name", "True or false?  Raccoons can run at speeds up to 15 miles per hour.", "What is an otter's primary food source?", "True or false? Otters spend the majority of their time on land.", "How many species of otters are there?", "True of false? Otters are native to Australia."],
    ["Product name", "True or false? Otters make and use tools.", "In years, what is the average life span of an otter in the wild?", "What is a nighthawk's primary food source?", "True or false?  Nighthawks are closely related to hawks.", "True or false?  Nighthawks make nests."],
    ["Product name", "Where do Common Nighthawks spend the winter?", "True or false?  Bullbat is another name for the Common Nighthawk.", "Nearest star?", "Gde dengi?", "Kak dela?"]
  ];

  const answers = [
    ["Product name", "boar", "sow", "omnivorous", "true", "false"],
    ["Product name", "true", "fish", "true", "13", "false"],
    ["Product name", "true", "10", "insects", "false", "false"],
    ["Product name", "South America", "true", "Proxima Cnetaur", "Doma", "Norm"]
  ];
  
  res.send({answer : questions[row][column], trueAnswer : answers[row][column] }); 
});

router.get('/', (req, res) => {
  res.render('index');
});

// route for user's dashboard
router.get('/dashboard', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.render('dashboard');
  } else {
    res.redirect('/users/login');
  }
});


module.exports = router;
