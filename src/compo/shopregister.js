import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

export default function ShopRegister() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName: '',
            Password: '',
            Age: 0,
            Mobile: '',
            Subscribe: true
        },
        onSubmit: values => {
            axios.post("http://localhost:2020/customers", values);
            alert("Register successfully");
            navigate("/login");
        }
    })
    return (
        <div className="row">

            <div className="col-3">
                <h2>Rgister New User</h2>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>UserId</dt>
                        <dd><input type="text" onChange={formik.handleChange} value={formik.values.UserId} name="UserId" /></dd>
                        <dt>UserName</dt>
                        <dd><input type="text" onChange={formik.handleChange} value={formik.values.UserName} name="UserName" /></dd>
                        <dt>Password</dt>
                        <dd><input type="text" onChange={formik.handleChange} value={formik.values.Password} name="Password" /></dd>
                        <dt>Age</dt>
                        <dd><input type="text" onChange={formik.handleChange} value={formik.values.Age} name="Age" /></dd>
                        <dt>Mobile</dt>
                        <dd><input type="text" onChange={formik.handleChange} value={formik.values.Mobile} name="Mobile" /></dd>
                        <dt>Subscribe</dt>
                        <dd className="form-switch"><input type="checkbox" className=" form-check-input" onChange={formik.handleChange} checked={formik.values.Subscribe} name="Subscribe" /> YES</dd>
                    </dl>
                    <button className="btn btn-primary">Register</button>
                    <br />
                    <Link to="/login">Already have account</Link>
                </form>
            </div>
            <div className="col-9 abc">

            </div>
        </div>
    )
}