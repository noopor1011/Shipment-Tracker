'use client'

import { useEffect, useState } from "react"



export default function Product(){

    // useEffect(async () => {
    //     let data = await fetch('https://dummyjson.com/products');
    //     data = data.json();
    //     console.log("data",data)
    // },[])
const [product,setProduct] = useState([])
    useEffect(() => {
        async function fetchData() {
          // You can await here
          let response = await fetch('https://dummyjson.com/products');
          response = await response.json();
          console.log("response",response)
          setProduct(response.products);
          // ...
        }
        fetchData();
      }, [])
console.log(product,"product listg")
    
    return (
        <>
        <h1>Product</h1>

        {
            product.map((item) =>(<h3>itemss :: {item.title}</h3>))
        
        }
        </>
    )
}