var express = require('express');
var app = express();
var signupRouter = require('./src/routes/signupRoutes');
var loginRouter = require('./src/routes/loginRoutes');


var navb = [ 
    {
        link: '/home', name: 'Home'
    },
    {
        link: '/books', name: 'Books'
    }, 
    {
        link: '/authors', name: 'Authors'
    },
    {
        link: '/newbook', name: 'Add new book'
    },
    {
        link: '/', name: 'Sign out'
    }
];

var booksRouter = require('./src/routes/bookRoutes')(navb);
var authorsRouter = require('./src/routes/authorRoutes')(navb);
var newbookRouter = require('./src/routes/addnewbookRoutes')(navb);







app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/newbook', newbookRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.get('/', function(req,res){

    res.render("index", { 
        navb1 : [ 
            {    
                link: '/signup', name: 'Signup'
            },
            {
                link: '/login', name: 'Login'
            },
            
        ],
        title : 'Library APP',
        img : 'library.jpg'

    });
});

app.get('/home', function(req,res){

    res.render("home", { 
        navb,
        title : 'Library APP',
        img : 'library.jpg'

    });
});
app.listen(3333);
