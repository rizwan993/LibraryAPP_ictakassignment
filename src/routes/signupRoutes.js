var express = require('express');
var signupRouter = express.Router();

signupRouter.get('/', function(req,res){

    res.render("signup", { 
        navb1 : [ 
            {    
                link: '/signup', name: 'Signup'
            },
            {
                link: '/login', name: 'Login'
            },
            
        ],
        title : 'Signup'

    });
});

module.exports = signupRouter;