
const router = require('express').Router();
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register',(req,res)=>{
 const {name,email,password,address}=req.body;
 const hash=bcrypt.hashSync(password,10);
 db.query("INSERT INTO users(name,email,password,address,role) VALUES(?,?,?,?, 'USER')",
 [name,email,hash,address],()=>res.send("Registered"));
});

router.post('/login',(req,res)=>{
 const {email,password}=req.body;
 db.query("SELECT * FROM users WHERE email=?",[email],(e,r)=>{
  if(!r.length) return res.status(400).send("Invalid");
  if(!bcrypt.compareSync(password,r[0].password)) return res.status(400).send("Invalid");
  const token=jwt.sign({id:r[0].id,role:r[0].role},'secret');
  res.json({token,role:r[0].role});
 });
});

module.exports = router;
