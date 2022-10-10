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
        
        Bookname : " secret",
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
    
    app.get('/findBookByAudher',(req,res)=>{
        let audher=[]
        for (let index = 0; index < list.length; index++) {
           console.log(list[index]);
            if(list[index].AutherName == 'Frank Abagnale jr')
            {
            audher.push(list[index])
            }
    
        }
        
        res.send(audher)
        
    })
   


    app.get('/findBookByPublishing',(req,res) =>{
        var publish=[]
        for (let index = 0; index < list.length; index++) {
            console.log(list[index]);
            if (list[index].Publishing == "Grosset & Dunlap") {
                publish.push(list[index])
            
        }
    }
    res.send(publish)
})



app.get('/findBookByYear',(req,res) =>{
    var year =[]
    for (let index = 0; index < list.length; index++) {
        console.log(list[index]);
        if(list[index].year== 2006){
            year.push(list[index])
        }
        
    }
    res.send(year)

})
app.post('/findBook',(req,res) =>{
    let book = req.body.book
    console.log(book);
    var bookn = []
    for (let index = 0; index < list.length; index++) {
        if(list[index].Bookname == book){
            bookn.push(list[index])
        }
    }
    res.send(bookn)
    
})
app.post('/findAudher',(req,res) =>{
    const Auther = req.body.Auther;
    console.log(Auther);
    var Bookaudher =[]
    for (let index = 0; index < list.length; index++) {
        if (list[index].AutherName == Auther) {
            Bookaudher.push(list[index])
            
        }
    }
    res.send(Bookaudher)
})


app.post('/publish',(req,res) =>{
    var published = req.body.published;
    console.log(published);
    var element=[]
    for (let index = 0; index < list.length; index++) {
        if (list[index].Publishing==published) {
            element.push(list[index])  
        }
    }
    res.send(element)
})
app.listen( 2700,() => {
    console.log("sever is running");
})
