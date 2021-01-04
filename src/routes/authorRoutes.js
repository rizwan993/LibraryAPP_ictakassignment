var express = require('express');
var authorsRouter = express.Router();

function router(navb){

var authors = [
    {
        
        author: "Joseph Barbera",
        img: "jb.jpg",
        para : "Joseph Roland Barbera (/bɑːrˈbɛərə, ˈbɑːrbərə/ bar-BAIR-ə, BAR-bər-ə,[1] Italian: [barˈbɛːra]; March 24, 1911 – December 18, 2006) was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century."
       
    },

    {
        
        author: "J k Rowling",
        img: "jk.jpg",
        para : "Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), better known by her pen name J. K. Rowling, is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith."
       
    },

    {
        
        author: "Basheer",
        img: "vb.jpg",
        para : "Vaikom Muhammad Basheer (21 January 1908 – 5 July 1994), also known as Beypore Sultan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man. His notable works include Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu, Janmadinam and Anargha Nimisham and the translations of his works into other languages have earned him worldwide acclaim. The Government of India awarded him the fourth highest civilian honor of the Padma Shri in 1982. He was also a recipient of the Sahitya Academy Fellowship, Kerala Sahitya Academy Fellowship, and the Kerala State Film Award for Best Story."
       
    },    
];

authorsRouter.get('/', function(req,res){

    res.render("authors", {
        
        navb, 
        title : 'Library',
        authors

        
    });

});

authorsRouter.get('/:id', function(req,res){
    const id = req.params.id

    res.render("author", {
            
        navb,
        title : 'Library',
        author : authors[id]
    
            
    })
})

return authorsRouter;

}

module.exports = router;