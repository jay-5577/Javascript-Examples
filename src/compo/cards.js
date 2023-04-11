import React from 'react';
import Card from 'react-bootstrap/Card';
export default function Cards({ data }) {
    return (
        <>
            {
                data.map((element, k) => {
                    function handlecart() {
                        alert(`Your Ordered Recived & \n Delivere In 30 Min.`);
                    }
                    return (
                        <>
                            <Card style={{ width: '22rem', border: "none" }} className='hove mb-4'>
                                <Card.Img variant="top" className='cd' src={element.imgdata} />
                                <div className=' card-body'>
                                    <div className='upper_data d-flex justify-content-between align-items-center'>
                                        <h4 className='mt-2'>{element.rname}</h4>
                                        <span>{element.rating}&nbsp;★</span>
                                    </div>
                                    <div className='lower_data d-flex justify-content-between align-items-center'>
                                        <h5 className='mt-2'>{element.address}</h5>
                                        <span>₹{element.price} for one</span>
                                    </div>
                                    <div className='extra'></div>
                                    <div className='last_data d-flex justify-content-between align-items-center'>
                                        <img src={element.arrimg} className='limg' />
                                        <p>{element.somedata}</p>
                                        <img src={element.delimg} className='laimg' />
                                    </div>
                                </div>
                                <div className=' card-footer'>
                                    <button onClick={handlecart} className='btn btn-primary w-100'>Order Now</button>
                                </div>
                            </Card>
                        </>
                    )
                })
            }

        </>
    )
}

