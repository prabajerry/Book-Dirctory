const express =require('express')
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.json());
var list =[

    {
        Bookname : "wings of fire",
        AutherName: "APJ",
        Publishing : "university Press",
        year:1999,
        edition:"paperback edition"
    },
    {
        
        Bookname : " ",
        AutherName: "Rhonda Byrne",
        Publishing : "Beyond words",
        year:2006,
        edition:"first edition"
    },
    {
        Bookname : "The life",
        AutherName: "Malcolm Knox",
        Publishing : "self Publishing",
        year:2012,
        edition:"Asphalte"
    },
    {
        Bookname : "The law of success",
        AutherName: "Napoleon Hill",
        Publishing : "Tribeca Books",
        year:1928,
        edition:"The 12st century"

    },
    {
        Bookname : "You Can",
        AutherName: " Frank Abagnale jr",
        Publishing : "Grosset & Dunlap",
        year:1980,
        edition:"hardcover edition"
    },
]
app.get('/all-BookList',(req,res)=>{
    res.send(list)
})

app.get('/findBookByBookName',(req,res)=>{
        console.log(list[4]);
        let bookName=[]
        for (let index = 0; index < list.length; index++) {
           console.log(list[index]);
            if(list[index].Bookname == "You Can" )
            {
                bookName.push(list[index])
            }   
        }
        
        res.send(bookName)
    })
    console.log("you can");

    
    app.get('/find book by audher',(req,res)=>{
        let audher=[]
        for (let index = 0; index < list.length; index++) {
           console.log(list[index]);
            if(list[index].AutherName == 'APJ')
            {
            audher.push(list[index])
            }
    
        }
        
        console.log("audher");
        res.send(audher)
    
    })





app.listen( 2700,() => {
    console.log("sever is running");
})
