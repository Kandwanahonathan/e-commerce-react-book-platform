import React,{useState,useEffect} from "react";
import library from "../assets/library.jpg";
import lamp from "../assets/lamp.jpg"
import animation from "../assets/magic-animation.jpg";
import magic from "../assets/magic.jpeg"
import night from "../assets/night-magic.gif";
import printest from "../assets/printest-magic.jpeg";
function Home(){

    const slides=[
        {img:library,text:"discover your next greater book to read 📚"},
        {img:lamp,text:"Enjoy 20% off on new arrival !!"},
        {img:animation,text:"fees to delivery is cheap dont't worry"},
        {img:magic,text:"you will do your own magic"},
        {img:night,text:"you will do your own magic even though it is night you will do your's"},
        {img:printest,text:"you will do your own magic even though it is night you will do your's"},
];
const [currentIndex, setCurrentIndex]=useState(0);

useEffect(()=>{

    const interval=setInterval(()=>{
        setCurrentIndex((prev)=>(prev+1)% slides.length)
        
    },10000)
    return ()=>clearInterval(interval)

},[slides.length])

return(
    <>
    <div className="d-flex align-items-center justify-content-center text-center text-white mb-3" 
    style={{
        height:"70vh",
        backgroundImage: `url(${slides[currentIndex].img})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        transition:"background-image 5s ease-in-out"
    }}>

        <div style={{
            backgroundColor:" rgba(0,0,0,0.5)",
            padding:"40px",
            borderRadius:"10px  "
            
        }}>
             <h1 className="fw-bold">{slides[currentIndex].text}</h1>
        <p className="fs-5 mt-3 fw-bold" style={{color:" rgba(245, 170, 40, 1)"}}>Welcome to Our Bookstore</p>

        </div>
        

    </div>
    <div>
        
    </div>
    <section id="contact" className="my-3 p-4  text-light text-center mb-3 "style={{ minHeight: "25vh", 
        backgroundColor:"rgba(90, 87, 87, 0.5)"}}>
            <h2 className="text-white">Contact Us</h2>
            <p>Email: info@bookstore.com</p>
        </section>
        </>
)
    
}
export default Home