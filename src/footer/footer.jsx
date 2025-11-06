 import React from "react";

 function Footer() {
    return(
        <footer className="text-center text-muted py-3 bg-success " style={{
            backgroundColor:"rgba(15, 12, 12, 0.1)",
            
            bottom:"0",
            left:"0",
            width:"100vw",
            boxShadow:"0 -2px 6px  rgba(7, 101, 98, 0.1)"
        }}>
            <p className="text-white">&copy;2025 BookStore. All Rights Reserved.</p>
            <a href="#contact" className="text-warning mx-3 text-decoration-none">
  Contact
</a>


        </footer>
    )
 }
 export default Footer