import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ShopLogin() {
    const [cookie, setCookie, removeCookie] = useCookies();
    var navigate = useNavigate();
    const [users, setusers] = useState([]);
    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: ''
        },
        onSubmit: values => {
            for (var user of users) {
                if (user.UserId == values.UserId && user.Password == values.Password) {
                    setCookie("userid", user.UserId, { path: '/', expires: new Date("2023-04-30") });
                    navigate("/dashboard");
                    break;
                } else {
                    navigate("/errorpage");
                }
            }
        }
    })
    useEffect(() => {
        axios.get("http://localhost:2020/customers")
            .then(function (response) {
                setusers(response.data);
            })
    }, []);
    function handleishop(){
        navigate("/category");
    }
    return (
        <div className="row w-75">
            <h2>User Login</h2>
            <div className="col-3">
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>UserId</dt>
                        <dd><input type="text" name="UserId" onChange={formik.handleChange} value={formik.values.UserId} /></dd>
                        <dt>Password</dt>
                        <dd><input type="text" name="Password" onChange={formik.handleChange} value={formik.values.Password} /></dd>
                    </dl>
                    <button className="btn btn-primary">Login</button>
                    <br />
                    <Link to="/register">New User?</Link>
                </form>
            </div>
            <div className=" col-9 d-flex justify-content-center">
                <div className=" text-center border border-success border-4 p-2">
                    <h1 className="ishop"><i>Please Visit Our Ishop Online Store</i></h1>
                    <marquee scrollamount="20" behavior="alternate">
                        <h2 className=" bg-info w-25 text-center">Electronic</h2>
                        <h2 className=" bg-primary w-25 text-center">Fashion</h2>
                        <h2 className=" bg-warning w-25 text-center">Footwear</h2>
                        <h2 className=" bg-success w-25 text-center">Jwellery</h2>

                    </marquee>
                    <button className="btn btn-danger" onClick={handleishop}>Visit  <span className="bi bi-box-arrow-up-right"></span></button>
                </div>
            </div>
        </div>
    )
}