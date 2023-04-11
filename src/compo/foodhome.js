import { useNavigate } from "react-router-dom"

export default function Foodhome() {
    var navigate = useNavigate();
    function handleproduct(){
        navigate("/dashboard");
    }
    return (
        <div>
            <div className="res">
                <div className="box d-flex justify-content-center align-items-center" style={{ height: "350px" }}>
                    <div className="text-white text-center">
                        <h2><i>FoodMagnet</i></h2>
                        <h3>Discover The Best Food & Drinks</h3>
                    </div>
                </div>
            </div>
            <div className=" d-flex justify-content-center align-items-center" style={{height:'200px'}}>
                <button onClick={handleproduct} className="btn btn-primary">
                    See Our Products 
                     <span className="bi bi-arrow-right"></span>
                </button>    
            </div>    
            
                
        </div>
    )
}