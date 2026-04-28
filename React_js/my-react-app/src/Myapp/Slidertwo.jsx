import React, { useState } from 'react'
import './myapp.css'

const products = [
    {
        id: 1,
        name: "Main Character Trio",
        price: "₹799",
        img: "https://via.placeholder.com/200"
    },
    {
        id: 2,
        name: "Lip Balm Set",
        price: "₹399",
        img: "https://via.placeholder.com/200"
    },
    {
        id: 3,
        name: "Lip Love Combo",
        price: "₹406",
        img: "https://via.placeholder.com/200"
    },
    {
        id: 4,
        name: "Nourishing Lip Balm",
        price: "₹298",
        img: "https://via.placeholder.com/200"
    },
    {
        id: 5,
        name: "Extra Product",
        price: "₹199",
        img: "https://via.placeholder.com/200"
    }
];

const Slider = () => {
    const [index, setIndex] = useState(0);
    const visible = 4;
    const nextSlide = () => {
        if (index < products.length - visible) {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <>
            <div className="slider">
                <h2>Trending Combos</h2>

                <button className="btn prev" onClick={prevSlide}>‹</button>
                <button className="btn next" onClick={nextSlide}>›</button>

                <div className="slider-window">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${index * 25}%)` }}
                    >
                        {products.map((item) => (
                            <div className="card" key={item.id}>
                                <img src={item.img} alt={item.name} />
                                <h4>{item.name}</h4>
                                <p>{item.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slidertwo