const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

const adminLayout = '../views/layouts/admin';
/**
 * GET /
 * ADMIN-LOGIN PAGE
*/
//routes
router.get('/admin', async (req, res) => {
 
    try {  const locals = {
        title:"Admin",
        description:"Simple blog created with NodeJS,MongoDB and Express."
    }
        
        res.render('admin/index',{ locals, layout:adminLayout });
    }

    catch (error) {
        console.log(error);
   }
});



module.exports = router;