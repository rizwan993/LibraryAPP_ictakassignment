var express = require('express');
var booksRouter = express.Router();

function router(navb){

var books = [
    {
        name: "Tom and Jerry",
        author: "Joseph Barbera",
        genre: "Cartoon",
        img: "tom.jpg",
        para : "Tom and Jerry is an American animated franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry. Many shorts also feature several recurring characters. In its original run, Hanna and Barbera produced 114 Tom and Jerry shorts for MGM from 1940 to 1958.[1] During this time, they won seven Academy Awards for Best Animated Short Film, tying for first place with Walt Disney's Silly Symphonies with the most awards in the category. After the MGM cartoon studio closed in 1957, MGM revived the series with Gene Deitch directing an additional 13 Tom and Jerry shorts for Rembrandt Films from 1961 to 1962. Tom and Jerry then became the highest-grossing animated short film series of that time, overtaking Looney Tunes. Chuck Jones then produced another 34 shorts with Sib Tower 12 Productions between 1963 and 1967. Three more shorts were produced, The Mansion Cat in 2001, The Karate Guard in 2005, and A Fundraising Adventure in 2014, making a total of 164 shorts."

       
    },

    {
        name: "Harry Potter",
        author: "J K Rowling",
        genre: "Fantasy",
        img: "harry.jpg",
        para : "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people). Since the release of the first novel, Harry Potter and the Philosopher's Stone, on 26 June 1997, the books have found immense popularity, positive reviews, and commercial success worldwide. They have attracted a wide adult audience as well as younger readers and are often considered cornerstones of modern young adult literature.[2] As of February 2018, the books have sold more than 500 million copies worldwide, making them the best-selling book series in history, and have been translated into eighty languages.[3] The last four books consecutively set records as the fastest-selling books in history, with the final installment selling roughly eleven million copies in the United States within twenty-four hours of its release."

    },

    {
        name: "Pathumayude Aadu",
        author: "Basheer",
        genre: "drama",
        img: "basheer.jpg",
        para : "Ever since Basheer first left home to participate in the salt satyagraha at Kozhikode, he had led a wanderer's life; Ottaanthadi, muchaanvayaru. Only occasionally did he return to his home at Thalayolapparambu, with the intention of penning down his thoughts in interludes of tranquility. Next to the house where he grew up, in the same compound, he had a walled-in plot with a small house. He built this retreat himself, and around the house he planted a garden. This gate was always closed, and he required silence and peace of mind. He would sit and write or walk around his garden tending to his beloved plants. On returning from one of his travels, he was forced to live in the house where his large family lived, instead of in his private home. This household was always filled with noise and chaos; no place for a writer. The inhabitants were Basheer's mother, his younger siblings and their families. Add to this, there were myriads of domestic animals who treated the house as their own. Basheer's sister Pathumma, who lived in a dilapidated shack a little distance away, would visit the house every day with her daughter Khadeeja and with them would come Pathumma's goat. This goat had absolute freedom in the house. It would eat up anything it could, from fallen leaves before someone came to sweep them, Chaambaykka fruits (Water Apple) from the lower branches of the tree basheer planted, trousers worn by Basheer's nephew Abi, grass specially gathered for it, food set away for it, even food meant for human inhabitants of the house, to the author's copy of newest editions of Basheer's Baalyakaalasakhi, Shabdangal and Vishwavikhyaadamaaya Mookku, fresh out of press."
    },

    
]

booksRouter.get('/', function(req,res){

    res.render("books", {
        
        navb, 
        title : 'Library',
        books

        
    });

});

booksRouter.get('/:id', function(req,res){
    const id = req.params.id

    res.render("book", {
            
        navb,
        title : 'Library',
        book : books[id]
    
            
    })
})

return booksRouter;

}

module.exports = router;