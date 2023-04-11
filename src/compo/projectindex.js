import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Foodhome from './foodhome';
import "./style.css";
import ShopDashboard from './shopdashboard';
import ShopRegister from './shopregister';
import ShopLogin from './shoplogin';
import Icategory from './ishopcategory';
import IProduct from './iproducts';
export default function ShopIndex() {
    return (
        <div className=' container-fluid'>
            <header className=' bg-danger  p-2 text-center'>
                <h2 className='bi bi-cart'> Welcome To Food Magnet </h2>
            </header>
            <section className=' mt-2 row'>
                <BrowserRouter>
                    <nav className='col-2'>
                        <div className='mb-2'>
                            <Link className='btn btn-danger w-100' to="/home">Home</Link>
                        </div>
                        <div className='mb-2'>
                            <Link className='btn btn-danger w-100' to="/register">Register</Link>
                        </div>
                        <div className='mb-2'>
                            <Link className='btn btn-danger w-100' to="/login">login</Link>
                        </div>
                        <div className='mb-2'>
                            <Link className='btn btn-danger w-100' to="/dashboard">Dashboard</Link>
                        </div>
                    </nav>
                    <main className='col-10'>
                        <Routes>
                            <Route path='/' element={<Foodhome />} />
                            <Route path='home' element={<Foodhome />} />
                            <Route path='dashboard' element={<ShopDashboard />} />
                            <Route path='register' element={<ShopRegister />} />
                            <Route path='login' element={<ShopLogin />} />
                            <Route path='category' element={<Icategory />} />
                            <Route path='category' element={<Icategory />} />
                            <Route path='iproducts/:category' element={<IProduct />} />

                        </Routes>
                    </main>
                </BrowserRouter>
            </section>
        </div>
    )
}