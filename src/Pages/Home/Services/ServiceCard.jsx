import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-lg">
      <figure className="px-5 pt-5">
        <img src={img} alt="Shoes" className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between mt-2">
          <p className="font-bold text-[#FF3811]">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <button className="cursor-pointer hover:text-[#FF3811]">
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
