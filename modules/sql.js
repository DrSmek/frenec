var express = require('express');
var router = express.Router();
var sql = require("mysql2");
module.exports = router;

var con = sql.createPool(require('../dbconf.json'));

router.use((req,res,next)=>{
    
    next();
})