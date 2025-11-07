import React, { useState } from "react";
import bibleBackground from "../assets/book/bible-as-background.jpg"
import comfortable from "../assets/book/be-comfratable.jpg"
import bible from "../assets/book/be-comfratable.jpg"
import design from "../assets/book/book-design.jpg"
import book4 from "../assets/book/book4.jpg"
import book5 from "../assets/book/book5.jpg"
import cleanBook from "../assets/book/cleanBook.jpg"
import corea from "../assets/book/corea.jpg"
import design2 from "../assets/book/design-yours.jpg"
import crush from "../assets/book/crush-book.jpg"
import defferentBook from "../assets/book/differentBook.jpg"
import englishSpeak from "../assets/book/english-speaker.jpg"
import mind from "../assets/book/expand-mind.jpg"
import flower from "../assets/book/flower.jpg"
import hand from "../assets/book/hand-holding.jpg"
import world from "../assets/book/live-in-world.jpg"
import prayer from "../assets/book/prayer-book.jpg"
import magic from "../assets/book/magic.jpg"
import boundaries from "../assets/book/over-the-boundaries.jpg"
import spring from "../assets/book/springForRabbit.jpg"
import write from "../assets/book/wite-yours.jpg"
import strong from "../assets/book/strong-cover.jpg"
import decoration from "../assets/book/decoration-book.jpg"

// import files
import bible2 from '../assets/bible.pdf'
import strong2 from '../assets/strong.pdf'
function Visit() {
    const book=[
        {img:comfortable,text:"once you read this you feel comfortable",author:"donard", file:bible2},
        {img:bibleBackground,text:"this book is tronsformer once you read it once you become transformed",author:"HoolySprit", file:bible2},
        {img:magic,text:"once you read it exactly you do your own magic",author:"magician", file:bible2},
        {img:spring,text:"spring our thoughts in the real of life",author:"Rudomoro",file:bible2},
        {img:write,text:"read and write this show way to reallise your life",author:"Nathan W.",file:bible2},
        {img:strong,text:"stronger mind comes form strong idea",author:"Edourd P.",file:bible2},
        {img:decoration,text:"Sheet maker in Domitory",author:"Lacasa",file:bible2},
        {img:crush,text:"it is book for crusher of the crushes",author:"Rush D.",file:bible2},
        {img:design,text:"it is for designer for the designer",author:"Desire D.",file:bible2},
        {img:design2,text:"book designer for the other designers",author:"Coby",file:bible2},
        {img:defferentBook,text:"Muster minder of Minders",author:"Macos C.",file:bible2},
        {img:cleanBook,text:"Romatic Book for Luto love",author:"LUTO P.",file:bible2},
        {img:mind,text:"Game changer and Inspiration of the youth",author:"KING KONG K.",file:bible2},
        {img:englishSpeak,text:"English IS  for englishers",author:"Rat OG .",file:bible2},
        {img:book4,text:"fourth book for the legend",author:"CUTTER M.",file:bible2},
        {img:book5,text:"Never fail in your life",author:"LEGEND M.",file:bible2},
        {img:corea,text:"pyschlogy experience",author:"Li Kanger .",file:bible2},

            { img: world, text: "A guide to understanding and living in harmony with our changing world.", author: "John Miles" ,file:strong2},
            { img: defferentBook, text: "A story that teaches you to embrace what makes you different.", author: "Amelia Scott" ,file:strong2},
            { img: cleanBook, text: "Discover the joy of simple living and a clutter-free mind.", author: "Sarah Johnson" ,file:strong2},
            { img: mind, text: "Expand your thinking and unlock the hidden power of your mind.", author: "Dr. Nathan Grey" ,file:strong2},
            { img: englishSpeak, text: "Master English speaking with confidence and clarity.", author: "Linda Roberts" ,file:strong2},
            { img: book4, text: "An inspiring novel about courage, hope, and second chances.", author: "Michael Green" ,file:strong2},
            { img: book5, text: "Dive into a thrilling story of mystery, secrets, and survival.", author: "Emily Rose" ,file:strong2},
            { img: bibleBackground, text: "Explore spiritual wisdom and timeless lessons from the Bible.", author: "Pastor David King" ,file:strong2},
            { img: world, text: "Learn how cultures connect and shape our global identity.", author: "Sophia Kim" ,file:strong2},
            { img: defferentBook, text: "A motivational journey to self-discovery and authenticity.", author: "Daniel Brooks" ,file:strong2},
            { img: cleanBook, text: "A practical guide to maintaining peace in a busy world.", author: "Hannah Clarke" ,file:strong2},
            { img: mind, text: "How to develop focus, creativity, and emotional intelligence.", author: "Dr. Alex Carter" ,file:strong2},
            { img: englishSpeak, text: "Improve pronunciation, fluency, and everyday conversations.", author: "Jane Miller" ,file:strong2},
            { img: book4, text: "A romantic tale that redefines love and forgiveness.", author: "Grace Howard" ,file:strong2},
            { img: book5, text: "A suspenseful novel full of unexpected twists and turns.", author: "Oliver Smith" ,file:strong2},
            { img: corea, text: "A deep look into Korean culture, art, and modern lifestyle.", author: "Lee Min Joon" ,file:strong2},
            { img: world, text: "Travel stories from around the globe that inspire adventure.", author: "Thomas Reid" ,file:strong2},
            { img: hand, text: "A moving story about friendship, kindness, and human connection.", author: "Evelyn Brown" ,file:strong2},
            { img: prayer, text: "Find comfort and strength through powerful prayers.", author: "Mary Collins" ,file:strong2},
            { img: boundaries, text: "Learn how to set healthy emotional and personal boundaries.", author: "Dr. Henry Cloud" ,file:strong2},
            { img: flower, text: "A beautiful collection of poetry inspired by nature’s grace.", author: "Lily Anderson" ,file:strong2},
            { img: book5, text: "A thrilling exploration of courage and destiny.", author: "Mark Peterson" ,file:strong2},
            { img: bibleBackground, text: "Daily devotionals to bring peace and purpose to your life.", author: "Rachel Adams" ,file:strong2},
          
          
    ]
    const [searchItem, setSearchItem] = useState("");
    
    
    
    return(
    <> 
    <div className="d-flex flex-column justify-content-center  align-items-center " style={{
        backgroundImage:`url(${magic})`,
        height:"70vh",
        backgroundPosition:"center",
        backgroundSize:"cover",
        position:"relative"
        
    }}>
       <div className="justify-content-center align-items-center mb-3" style={{
        backgroundColor:"rgba(0,0,0,0.5)",
        padding:"70px",
        borderRadius:"10px",
        width:"80%",
        height:"7vh",
        position:"relative",
        textAlign:"center",
        overflow:"hidden",
        whiteSpace:"nowrap",
        objectFit:"cover"
       }}>
        <div className="" style={{
            display:"inline-block",
            animation:"slide 5s linear infinite"
        }}>
         <h2 className="text-warning"><b>!!!YOUR WELCOME TO OUR BOOKSTORE TODAY</b></h2>
         <p className="text-white fw-bold ">Discover new books, explore collections, and enjoy reading!</p>
         </div>
       </div><br /><br />   
       {/* search buttinput and it's button */}
       <div className="d-flex w-75 justify-content-center align-items-center  mb-3">
        <input type="text" className="form-control shadow-lg w-50 me-2" value={searchItem} placeholder="Search by author or keyword..." onChange={(e) =>setSearchItem(e.target.value)}
         />
         <button className="btn btn-success">Search</button>
       </div>
       
    </div>
    {/* card  */}
    <div className="d-flex flex-wrap justify-content-center gap-3 mt-5 px-3">
    {
        book
        .filter((item)=>
        item.author.toLowerCase().includes(searchItem.toLowerCase()) || 
        item.text.toLowerCase().includes(searchItem.toLowerCase()) 
        )
        
        .map((item,index)=>(
            <div className="card border-0" key={index} style={{
            width:"240px",
            borderRadius:"15px",
            overflow:"hidden",
            transition:"transform 0.3s ease,box-shadow 0.3s ease"
            
            }}
            onMouseEnter={(e)=>{
                e.currentTarget.style.transform="translateY(-8px)";
                e.currentTarget.style.boxShadow="0px 5px 15px rgba(0,0,0,0.2)"
            }}
            onMouseLeave={(e)=>{
                e.currentTarget.style.transform="translateY(0)";
                e.currentTarget.style.boxShadow="0px 5px 15px rgba(0,0,0,0.1)"
            }}
            >
                <img src={item.img} alt={item.text} className="card-img-top" style={{height:"300px",objectFit:"cover"}}/>
                <div className="card-body">
                    <h4>{item.author}</h4>
                    <a href={item.file} download className="btn btn-success">
                        Download
                    </a>
                    <a href={item.file} _blank className="btn btn-success mx-3">Open</a>
                </div>
            </div>
        ))
       }
       </div>

    {/* adding style in page */}
    <style>

        {
        `
        @keyframes slide{
        0%{transform:translateX(10%);}
        100%{transform:translateX(-5%);}
        }
        
        
        `}
    </style>
    </>
           
    )
}

export default Visit