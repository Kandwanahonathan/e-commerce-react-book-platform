import React from "react";
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
function Visit() {
    const book=[
        {img:comfortable,text:"once you read this you feel comfortable",author:"donard",},
        {img:bibleBackground,text:"once you read this you feel comfortable",author:"donard",},
        {img:magic,text:"once you read this you feel comfortable",author:"donard",},
        {img:spring,text:"once you read this you feel comfortable",author:"donard",},
        {img:write,text:"once you read this you feel comfortable",author:"donard",},
        {img:strong,text:"once you read this you feel comfortable",author:"donard",},
        {img:decoration,text:"once you read this you feel comfortable",author:"donard",},
        {img:crush,text:"once you read this you feel comfortable",author:"donard",},
        {img:design,text:"once you read this you feel comfortable",author:"donard",},
        {img:design2,text:"once you read this you feel comfortable",author:"donard",},
        {img:defferentBook,text:"once you read this you feel comfortable",author:"donard",},
        {img:cleanBook,text:"once you read this you feel comfortable",author:"donard",},
        {img:mind,text:"once you read this you feel comfortable",author:"donard",},
        {img:englishSpeak,text:"once you read this you feel comfortable",author:"donard",},
        {img:book4,text:"once you read this you feel comfortable",author:"donard",},
        {img:book5,text:"once you read this you feel comfortable",author:"donard",},
        {img:corea,text:"once you read this you feel comfortable",author:"donard",},
        {img:world,text:"once you read this you feel comfortable",author:"donard",},
        {img:defferentBook,text:"once you read this you feel comfortable",author:"donard",},
        {img:cleanBook,text:"once you read this you feel comfortable",author:"donard",},
        {img:mind,text:"once you read this you feel comfortable",author:"donard",},
        {img:englishSpeak,text:"once you read this you feel comfortable",author:"donard",},
        {img:book4,text:"once you read this you feel comfortable",author:"donard",},
        {img:book5,text:"once you read this you feel comfortable",author:"donard",},
        {img:bibleBackground,text:"once you read this you feel comfortable",author:"donard",},
        {img:world,text:"once you read this you feel comfortable",author:"donard",},
        {img:defferentBook,text:"once you read this you feel comfortable",author:"donard",},
        {img:cleanBook,text:"once you read this you feel comfortable",author:"donard",},
        {img:mind,text:"once you read this you feel comfortable",author:"donard",},
        {img:englishSpeak,text:"once you read this you feel comfortable",author:"donard",},
        {img:book4,text:"once you read this you feel comfortable",author:"donard",},
        {img:book5,text:"once you read this you feel comfortable",author:"donard",},
        {img:corea,text:"once you read this you feel comfortable",author:"donard",},
        {img:world,text:"once you read this you feel comfortable",author:"donard",},
        {img:hand,text:"once you read this you feel comfortable",author:"donard",},
        {img:prayer,text:"once you read this you feel comfortable",author:"donard",},
        {img:boundaries,text:"once you read this you feel comfortable",author:"donard",},
        {img:flower,text:"once you read this you feel comfortable",author:"donard",},
        {img:book5,text:"once you read this you feel comfortable",author:"donard",},
        {img:bibleBackground,text:"once you read this you feel comfortable",author:"donard",},
    ]
    
    
    
    return(
    <> 
    <div className="d-flex " style={{
        backgroundImage:`url(${magic})`,
        height:"70vh",
        backgroundPosition:"center",
        backgroundSize:"cover",
        position:"relative"
        
    }}>
       <div className="justify-content-center align-items-center " style={{
        backgroundColor:"rgba(0,0,0,0.5)",
        padding:"70px",
        borderRadius:"10px",
        width:"80%",
        height:"7vh",
        position:"relative",
        textAlign:"center",
        overflow:"hidden",
        whiteSpace:"nowrap"
       }}>
        <div className="" style={{
            display:"inline-block",
            animation:"slide 5s linear infinite"
        }}>
         <h2 className="text-warning"><b>YOUR WELCOME TO OUR BOOKSTORE TODAY</b></h2>
         <p className="text-white fw-bold ">Discover new books, explore collections, and enjoy reading!</p>
         </div>
       </div>
       {/* search buttinput and it's button */}
       <div className="">
       </div>
       
    </div>
    {/* card  */}
    <div className="d-flex flex-wrap justify-content-center gap-3 mt-5 px-3">
    {
        book.map((item,index)=>(
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
                    <button className="btn btn-success">download</button>
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