import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function IProduct(){
    let params = useParams();
    const[category, setCategory] = useState();
    const[products, setProduct] = useState([]);
    useEffect(()=>{
        setCategory(params.category);
        axios.get("http://localhost:2020/products")
        .then(function (response){
            setProduct(response.data);
        })
    })
    return(
        <div>
            <h2>{category} List</h2>
            <ol>
                {
                    products.filter(item=>item.category==category).map(product=>
                        <li key={product.id}>
                            <img src={product.image} height="50" width="50" />
                            <div>{product.title}</div>
                        </li>
                    )
                }
            </ol>
            <div><Link to="/dashboard">Back to categories</Link></div>
        </div>
    )
}