import { useEffect, useState } from 'react'
import './myapp.css'
import Cards from './Cards';


const images = [
    "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/9c59/93e6/7162/56cf/5c84/639a/542a/8243/7ad2/e86d/e86d.jpg",
    "https://www.imagesbof.in/wp-content/uploads/2023/06/Sugar-Cosmetics.jpg",
    "https://exchange4media.gumlet.io/news-photo/95070-SUGAR.jpg"
];

function Slider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className="slider">
                <img src={images[index]} alt="slider" />
            </div>
            <Cards/>

        </>
    )
}

export default Slider