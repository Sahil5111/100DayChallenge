import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
           const card= data.map((element)=>{
               return (
                   <Card
                    key={element.id}
                    img={"../images/"+element.coverImg}
                    rating ={element.stats.rating} 
                    reviewCount={element.stats.reviewCount}
                    location={element.location}
                    title={element.title}
                    price={element.price}
                   />
               )
           })
    return (
        <div>
            <Navbar />
            <Hero/>
            <div className="container">
              <div className="row">
            {card}
              </div>
            </div>
        </div>
    )
}