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
  db.query('SELECT name.id, name.name, work.work, category.salary FROM name, work, category WHERE name.id_work=work.id AND name.id_salary=category.id;', (err, rs) =>{
    res.render('index', { title: 'Arkademy Bootcamp', data: rs });
  });
});

router.get('/form', (req,res,next) => {
  db.query('SELECT name.name, work.work, category.salary, work.id_salary, category.id FROM name, work, category WHERE work.id_salary=category.id', (err, rs) =>{
    res.render('form', { work : rs, name : {} });
  });
});

router.post('/form', (req,res,next) => {
  db.query('INSERT INTO name SET ?', req.body, (err, rs) =>{
    res.redirect('/');
  });
});

router.get('/delete', (req, res, next)=>{
  db.query('DELETE FROM name WHERE id=?', req.query.id, (err, rs)=>{
    res.redirect('/');
  });
});

router.get('/edit', (req, res, next) => {
  db.query('SELECT name.id, name.name, work.work, category.salary, work.id_salary FROM name, work, category WHERE work.id_salary=category.id AND name.id=?', req.query.id, (err, rs)=>{
    res.render('form', { name : rs[0], work : rs});
  });
});

router.post('/edit', (req, res, next) =>{
  var param = [ req.body, req.query.id]
  db.query('UPDATE name SET ? WHERE id=?', param, (err, rs) => {
    res.redirect('/');
  });
});

module.exports = router;
