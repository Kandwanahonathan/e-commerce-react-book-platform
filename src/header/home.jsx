import React,{useState,useEffect} from "react";
import library from "../assets/library.jpg";
import lamp from "../assets/lamp.jpg"
import animation from "../assets/magic-animation.jpg";
import magic from "../assets/magic.jpeg"
import night from "../assets/night-magic.gif";
import printest from "../assets/printest-magic.jpeg";
//featured book as card
import english from "../assets/featured-book/englishBook.jpg";
import flower from "../assets/featured-book/flower.jpg";
import old_books from "../assets/featured-book/old_books.jpg";
import money from "../assets/featured-book/money.jpg";
import political from "../assets/featured-book/politicalScience.jpg";
import colonial from "../assets/featured-book/pre-colonial-book.jpg";
import zoology from "../assets/featured-book/zoology.jpg";
function Home(){

    const slides=[
        {img:library,text:"!!!!!YOUR WELCOME IN THE WORLD OF READER📚"},
        // {img:lamp,text:"Enjoy 20% off on new arrival !!"},
        // {img:animation,text:"fees to delivery is cheap dont't worry"},
        // {img:magic,text:"you will do your own magic"},
        // {img:night,text:"you will do your own magic even though it is night you will do your's"},
        // {img:printest,text:"you will do your own magic even though it is night you will do your's"},
];
const [currentIndex, setCurrentIndex]=useState(0);

useEffect(()=>{

    const interval=setInterval(()=>{
        setCurrentIndex((prev)=>(prev+1)% slides.length)
        
    },10000)
    return ()=>clearInterval(interval)

},[slides.length])

const FeaturedBook=[
    {img:english,title:"Learn English", author:"Nathan",price:"$5"},
    {img:flower,title:"once you read this your mind will be grown well" ,author:"Gahigi",price:"$4"},
    {img:colonial,title:"Learn English" ,author:"Sylivia"},
    {img:political,title:"hey politian this book is for u ", author:"Gentille",price:"$10"},
    {img:zoology,title:"learn zoology dear friend", author:"Manzi",price:"$15"},
    {img:old_books,title:"do you want the clear history read this book", author:"Harerimana",price:"$115"},
    {img:flower,title:"once you read this your mind will be grown well" ,author:"Gahigi",price:"$4"},
    {img:money,title:"physchology for money are you ready to bercome a rich your wwelcome in the world of reach" ,author:"Akandwanaho",price:"$50"}
]

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
        <p className="fs-5 mt-3 fw-bold" style={{color:" rgba(245, 170, 40, 1)",fontSize:"500px"}}>Welcome to Our Bookstore</p>

        </div>
        

    </div>
    {/* card for futured book */}
    <div className="container-fluid gap-4 my-5" style={{ backgroundColor: "#f8f9fa",width:"100vw"}}>

      <h1 className="text-center mb-4 text-success fw-bold">FuturedBooks in BookStore</h1>
      <div className="d-flex flex-wrap  gap-4 shadow-lg">

        {FeaturedBook.map((book,index)=>(
            <div key={index} className="card "  style={{
              width:"300px",
              borderRadius:"15px",
              overflow:"hidden",
              transition:"transform 0.3s",
              cursor:"pointer"
          }}>
                <img src={book.img} alt={book.title} className="card-img-top" style={{height:"200px", objectFit:"cover"}}/>

                <div 
                onMouseEnter={e => e.currentTarget.style.transform="scale(1.05)"}
                onMouseLeave={e =>e.currentTarget.style.transform="scale(1)"}
                >
                    <h5 className="card-title text-center"><b>Tittle:</b>{book.title}</h5>
                    <h5 className="card-title text-center">Author:<b>{book.author}</b></h5>
                    <h5 className="card-title text-center">price:<b>{book.price}</b></h5>
                    <button >open</button>
                </div>
            </div>
        ))}

      </div>

    </div>
    <section id="testimonials" className="my-5 py-5 text-center" style={{
  backgroundColor: "#f8f9fa"
}}>
  <h3 className="mb-4 text-success fw-bold">What Our Readers Say 📚</h3>
  <div className="container d-flex flex-wrap justify-content-center gap-4">
    
    {/* Testimony 1 */}
    <div className="card shadow-lg border-0 p-3" style={{
      width: "300px",
      borderRadius: "15px",
      transition: "transform 0.3s"
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <img src="https://i.pravatar.cc/150?img=12" alt="user" 
        className="rounded-circle mx-auto d-block mb-3"
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />
      <p className="text-muted">"This bookstore is amazing! I always find new and interesting books here."</p>
      <h6 className="fw-bold mb-1">— Nathan M.</h6>
      <p className="text-warning">★★★★★</p>
    </div>

    {/* Testimony 2 */}
    <div className="card shadow-lg border-0 p-3" style={{
      width: "300px",
      borderRadius: "15px",
      transition: "transform 0.3s"
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <img src="https://i.pravatar.cc/150?img=20" alt="user" 
        className="rounded-circle mx-auto d-block mb-3"
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />
      <p className="text-muted">"Fast delivery and good prices. My go-to place for buying study books."</p>
      <h6 className="fw-bold mb-1">— Gentille K.</h6>
      <p className="text-warning">★★★★★</p>
    </div>

    {/* Testimony 3 */}
    <div className="card shadow-lg border-0 p-3" style={{
      width: "300px",
      borderRadius: "15px",
      transition: "transform 0.3s"
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <img src="https://i.pravatar.cc/150?img=33" alt="user" 
        className="rounded-circle mx-auto d-block mb-3"
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />
      <p className="text-muted">"I love the collection of old and rare books! It feels like a hidden treasure."</p>
      <h6 className="fw-bold mb-1">— Manzi D.</h6>
      <p className="text-warning">★★★★☆</p>
    </div>

  </div>
</section>

    <section id="contact" className="my-3 p-4  text-light text-center mb-3 "style={{ minHeight: "25vh", backgroundColor: "#f8f9fa"
        }}>
            <h2 className="text-success">Contact Us</h2>
            <p className="text-success">Email: info@bookstore.com</p>
        </section>
        </>
)
    
}
export default Home