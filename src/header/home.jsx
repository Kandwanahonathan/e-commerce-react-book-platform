import React,{useState,useEffect} from "react";
import bgBook from "../assets/lamp.jpg";

function Home() {
    const [promo,setPromo]=useState(["20% off on all fantasy books!",
  "New arrivals: Bestselling novels this month",
  "Free shipping on orders above $50"]);
  const [futureBook,setfutureBook] =useState([
  { title: "Magic of Thinking Big", author: "David Schwartz", price: 12.99 },
  { title: "Atomic Habits", author: "James Clear", price: 15.99 },
  { title: "The Alchemist", author: "Paulo Coelho", price: 10.99 },]);
  const[testimon, setTestimon]=useState([
      "This bookstore changed my life!",
  "Amazing selection and fast delivery!",
  "Highly recommend for book lovers!"
  ]);
  const [alert,setAlert]=useState([
     "We now deliver internationally!",
  "New reading club starting next week!",
  "Subscribe for exclusive offers!"
  ]);

return(
    <div className="container-fluid ms-auto">
        <img src={bgBook} alt="bckground" className="img-fluid" style={{
            backgroundSize:"cover",
            
            backgroundImage:`url(${bgBook})`,
            width:"100%",
            height:"70vh"

        }}/>

        <div>
            <h1>promotion to you</h1>
            
                {
                     promo.map((item,index)=>(
                        <p key={index}>{item}</p>
                    ))
                }
            
          
        </div>

    </div>
)

}
export default Home