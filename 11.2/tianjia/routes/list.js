var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'baobei'
})

/* GET home page. */
router.get('/show', function(req, res, next) {
  pool.query('SELECT uid,title,time,name,content FROM datalist',function(err,rows){
    res.header('Access-Control-Allow-Origin','*');
    res.send(rows)
  })
});


router.post('/amend', function(req, res, next) {
  var tit = req.body.tit;
  var timer = req.body.timer;
  var namea = req.body.namea;
  var cont = req.body.cont;
  var sele = req.body.sele;
  console.log(tit,timer,namea,cont)
  pool.query(`INSERT INTO datalist(title,time,name,content,uid) VALUES('${tit}','${timer}','${namea}','${cont}','${sele}')`,function(err,rows){
  res.header('Access-Control-Allow-Origin','*');
    res.send(rows)
  })
});
module.exports = router;
