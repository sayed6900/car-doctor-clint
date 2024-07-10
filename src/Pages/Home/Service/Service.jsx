
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {

    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <div className=" mt-8 ">
            <div className="text-center">
            <h2 className="text-2xl text-orange-500 font-bold">Service</h2>
            <h1 className="text-4xl font-bold">Our Service Area</h1>
            <p>The Price mentioned are service charges and does not include the cost of any material or component cost.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 ">
                {
                    services.map(service => <ServiceCard key={service._id} 
                    service={service} ></ServiceCard> )
                }
            </div>
        </div>
        
    );
};

export default Service;