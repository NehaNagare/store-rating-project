
const router = require('express').Router();
const db = require('../config/db');
const auth = require('../middleware/auth');

router.get('/dashboard',auth(['ADMIN']),(req,res)=>{
 db.query("SELECT COUNT(*) u FROM users",(_,u)=>{
  db.query("SELECT COUNT(*) s FROM stores",(_,s)=>{
   db.query("SELECT COUNT(*) r FROM ratings",(_,r)=>{
    res.json({users:u[0].u,stores:s[0].s,ratings:r[0].r});
   });
  });
 });
});

module.exports = router;
