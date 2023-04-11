import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import App from "./App";
export default function IshopDashboard() {

    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();
    const [userid, setuserid] = useState();
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        if (cookie['userid'] == undefined) {
            navigate("/login");
        } else {
            setuserid(cookie["userid"]);
        }
    })
    function handlesignout() {
        removeCookie("userid");
        navigate("/login");
    }
    return (
        <div>
            <h2 className=" text-center">User Dashboard - {userid} <button className="btn btn-link" onClick={handlesignout}>Sign-out</button></h2>
            <hr />
            <div className=" carousel fade">
                <div className=" carousel-inner">
                    <div className=" carousel-item">
                        <img src="../public/resback.jpg" height="300px" className=" d-block w-100" />
                    </div>
                </div>
            </div>
            <App />
        </div>
    )
}