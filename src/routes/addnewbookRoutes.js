var express = require('express');
var newbookRouter = express.Router();

function router(navb){

    newbookRouter.get('/', function(req,res){

        res.render("addnewbook", {
            
            navb, 
            title : 'Library',
            
    
            
        });
    
    });

    return newbookRouter;

}

module.exports = router;