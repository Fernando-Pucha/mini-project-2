import dataFunkoPop from '../Data.json';
import { Link, useParams } from "react-router-dom";

export default function DetailsProductsList() {

    const { funkoId } = useParams();

    const funkoDetails = dataFunkoPop.find((funko) => funko.id === parseInt(funkoId));

    return (
        <div className="details-products-list" >
            <h1>Details {funkoDetails.name}</h1>
            <img src={funkoDetails.image} alt={funkoDetails.name} />
  {/*           <h2>{funkoDetails.name} </h2> */}
            < p > {funkoDetails.description} </p>
            < p > Price: ${funkoDetails.price} </p>
            < Link to="/products" > Back to products </Link>
        </div>
    );
}