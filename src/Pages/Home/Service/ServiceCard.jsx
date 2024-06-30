import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-48 rounded-lg pt-4" src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title} </h2>
        
        <div className="card-actions justify-end text-orange-600">
        <p className="font-bold">Price: ${price} </p>
          <button className="btn btn-square bg-orange-400 btn-outline">
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
