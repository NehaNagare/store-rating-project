
const router = require('express').Router();
const db = require('../config/db');
const auth = require('../middleware/auth');

router.get('/',auth(),(req,res)=>{
 db.query(
 "SELECT s.*, AVG(r.rating) avgRating FROM stores s LEFT JOIN ratings r ON s.id=r.store_id GROUP BY s.id",
 (e,r)=>res.json(r)
 );
});

router.post('/:id/rate',auth(['USER']),(req,res)=>{
 const {rating}=req.body;
 db.query(
 "REPLACE INTO ratings(user_id,store_id,rating) VALUES(?,?,?)",
 [req.user.id,req.params.id,rating],
 ()=>res.send("Rated")
 );
});

module.exports = router;
