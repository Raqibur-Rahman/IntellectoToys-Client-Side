
import { Link } from "react-router-dom";
import "./category.css";

const ToyCard = ({ toy }) => {
  const { name, price, picture } = toy;

  return (
    <div>
      <div className="card w-96 bg-base-100 h-96 shadow-xl p-1">
        <figure className="px-10 pt-10">
          <img src={picture} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <div className="card-actions">
            <Link to={`/toys/${toy._id}`}>
              <button className="btn btn-primary">View details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
