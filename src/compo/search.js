import React, { useEffect } from 'react';
import "./style.css";
import Fooddata from './FoodData';
import { useState } from 'react';
import Cards from './cards';
import Set from './set';

export default function Search() {

    const[copydata, setCpoyData] = useState([]);

    const[fdata, setFdata] = useState(Fooddata);
    
    const foodmagnet = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH98FVml3rVGgOXX-ufLjtYHh6BGeSdjv15Q&usqp=CAU";

    const changeData = (e)=>{
        let getchangedata = e.toLowerCase();

        if(getchangedata == ""){
            setCpoyData(fdata);
        }
        else{
            let storedata = copydata.filter((ele, k)=>{
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCpoyData(storedata);
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            setCpoyData(Fooddata);
        },3000);
    },[]);

  return (
    <>
        <div className='container d-flex justify-content-between align-items-center'>
            <img src={foodmagnet} style={{width:"8rem", position:"relative", left:"2%", cursor:"pointer"}} alt='' />
            <h2 style={{cursor:"pointer"}}>Search Filter App</h2>
        </div>
       <form>
            <div className=' d-flex justify-content-center align-items-center mt-3'>
                <div className=' input-group' style={{width:'500px'}}>
                    <input type='text' className=' form-control' onChange={(e)=>changeData(e.target.value)} placeholder='Search For Restaurant' />
                    <button className='btn btn-danger'>Submit</button>
                </div>
            </div>
       </form>
       <section className='item_section mt-4 container'>
          <h2 className=' px-4' style={{fontWeight:400}}>Restaurants in Ahmedabad Open now</h2>
          
          <div className='row mt-2 d-flex justify-content-around align-items-center'>
             { copydata && copydata.length ?  <Cards data={copydata} /> : <Set sdata={fdata} /> }
          </div>
       </section>
       
    </>
  )
}
