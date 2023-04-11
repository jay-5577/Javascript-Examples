import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"


export default function Icategory() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:2020/categories")
            .then(function (response) {
                setCategories(response.data);
            })
    })
    return (
        <div>
            <h2>categories</h2>
            <ol>
                {
                    categories.map(item =>
                        <li key={item.category}><Link to={"/iproducts/" + item.category}>{item.category.toUpperCase()}</Link></li>
                    )
                }
            </ol>
        </div>
    )
}