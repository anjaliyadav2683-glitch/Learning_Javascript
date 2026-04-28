import React from 'react'
import './myapp.css'
import Slidertwo from './Slidertwo';

const products = [
    { id: 1, name: "Lipstick", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRputeKhxCANj4lB7xzfipB8x8DiHHhYjdsdM7IelgMafoCS8N88zj-ym9NCYGol_0AU1fC96gcBGYTfuGY73p7QPMNI9GsOTfCpSLJ6iU6wPOmzCe-3Ml0kw" },
    { id: 2, name: "Foundation", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRCrMT3CzT8NnSKVTmmYpCF62RoJVGvQJstDsbeG3H1xkYGXuW9BNvWscg9Bwgc944L8hjZ1MaRcxYh-Rim1gyvinn2QF3BgdbdgmisRSrCjUq0aIL5LRe-hA" },
    { id: 3, name: "Eyeliner", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSL_nsJ_3gsBWMnIwxUUoeLtX_20E_AmI-CXtt-CnZBll-q7138oDWUaxX29sM36T-vx6TjzE4xoJwYvSwGuyy8aplQzVVqbDevtOQwz3ROiHfAf4HWn5E_bP8" },
    { id: 4, name: "Compact", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQlI1Jz7KDl7mWUGC1ARMcCdY8QifMJUn-l4ieQmu7x5gAW2S8gcMRes9RQwHR-LbDR9L9ycjrsET2lZxBrSGYfCqi2sMGF4NG7UI2wTdWF9Rcu-J2cZ1F2Eg" },
    { id: 5, name: "Mascara", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTXlW-aVH5RZyYEYFLGW4Vs93gZT_-X2rrCgiTJ4lxASaufY_6Vbsm--19xjI0lGp0ltU-6KQHGprFEk56ZXrC5IDyfugkU4eh14kmVn0btRGyXjIvKUcvvTQ" },
    { id: 6, name: "Blush", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1PUe_kch9s0dNmzZWjYHFjYhonWO1oPs2X-Y00P-ZviCuQSZckwf4xj5Layn3DceF7cd2Ro9oIxhXGcbGFVcqNR69OQV53Q" },
    { id: 7, name: "Highlighter", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrRoEDsLRbLEk8I7XTRRejSt0_3MB2q1uTNnN3v5VnMAb1VqqK-FWL8ISgkBjpQM7CgHbvC03yRQjW4XDFU2jZBtxITCIFNUqJeXX0Zx2dFgkQZ_a99Av4" },
    { id: 8, name: "Nail Polish", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQPlRSrRvSY5ZOpl6UOCwG9Zm-QqAGslqfTY6juufX8igxK1-lVvMRPNvw9O2YSJqBNivbK-QOc09OPCipi8uN3aSmWkhSrw" },
];


function Cards() {
    return (
        <>
            <div className="card-container">
                {products.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <button>Buy Now</button>
                    </div>
                ))}
            </div>
            <Slidertwo/>
            
        </>
    )
}

export default Cards