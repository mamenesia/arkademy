var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'test_arkademy',
  debug : false
});

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query('SELECT name.name, work.work, category.salary FROM name, work, category WHERE name.id_work=work.id AND name.id_salary=category.id;', (err, rs) =>{
    res.render('index', { title: 'Arkademy Bootcamp', data: rs });
  });
});


router.get('/form', (req,res,next) => {
  db.query('SELECT work.work, category.salary, work.id_salary, category.id FROM work, category WHERE work.id_salary=category.id', (err, rs) =>{
    res.render('form', { work: rs });
  });
});

router.post('/form', (req,res,next) => {
  db.query('INSERT INTO name SET ?', req.body, (err, rs) =>{
    res.redirect('/');
  });
});

module.exports = router;
