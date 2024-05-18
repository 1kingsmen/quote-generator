let quotes = document.getElementById("quotes")
let author = document.getElementById("author")
let button = document.getElementById("generate")


let  quotelist = [
    {
        quote: "the only way to do great work is to love what you do.",
        author:"steve jobs",
    },

    {
        quote: "success is not final, failure is not fatal: it is  the courage to continue that counts.",
        author:"winston churchil",
    },

    {
        quote: "in the end, it`s not the years in your life that count. it`s the life in your years.",
        author:"abraham lincoln",
    },

    {
        quote: "the only limit to our realization of tommorow will be our doubts of today.",
        author :"franklin.D.roosevelt",
    },

    {
        quote: "believe you can and you`re halfway there.",
        author :"theodore roosevelt",
    },

    {
        quote: "don`t watch the clock: do what it does keep going.",
        author :"sam levenson",
    },

    {
        quote: "the future belongs to does who believe in the beauty of their dreams.",
        author :"eleanor roosevelt",
    },

    {
        quote: "it`s not whether you get knocked down, it`s whether you get up.",
        author :"vince lombardi",
    },

    {
        quote: "the only impossible journy is the one you never begin.",
        author :"tony robbins",
    },

    {
        quote: "you are never to old to set another goal or to dream a new dream.",
        author :"c.s lewis",
    },

    {
        quote: "sucess is not the key to happiness. happiness is the key to success, if you love what you are doing you will be successful.",
        author :"albert schweitzer",
    },

    {
        quote: "the best way to predict the future is to create it",
        author :"peter drucker",
    },

    {
        quote: "the only thing standing between you and your goal is the story you keep telling yourself as to why you cany achieve.",
        author :"jordan belfort",
    },

    {
        quote: "your time is limited, don`t waste it living someone else`s life.",
        author :"steve jobs",
    },

    {
        quote: "strive not to be a success, but rather to be of a value.",
        author :"albert einstien",
    },

    {
        quote: "the greatest glory in living lies not in never falling, but in rising every time we fall.",
        author :"nelson mandela",
    },

    {
        quote: "life is what happens when you are busy making other plans.",
        author :"john lennon",
    },

    {
        quote: "the only place where success comes before works is in the dictionary.",
        author :"mark twain",
    },

    {
        quote: "twenty years from now you will be more disappointed by the things that you did not than by the ones you did do",
        author :"c.s lewis",
    },

    {
        quote: "the way to get started is to quit talking and begin doing.",
        author :"walt disney",
    },
   
]

function random(){
    let ranobj = quotelist[Math.floor(Math.random() * quotelist.length)];
    let word= ranobj.quote
    let person = ranobj.author
   
   

   
       console.log(quotelist)
        
    
  quotes.innerHTML = word
  author.innerHTML = "by \n" +  person
  
 
}
random()
button.addEventListener("click", random)
 

