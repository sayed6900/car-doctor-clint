import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-48 rounded-lg pt-4" src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title} </h2>
        
        <div className="card-actions justify-end text-orange-600">
        <p className="font-bold">Price: ${price} </p>
          <Link to={`/checkout/${_id}`} >
          <button className="btn btn-square bg-orange-400 btn-outline">
            <FaArrowRight></FaArrowRight>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
