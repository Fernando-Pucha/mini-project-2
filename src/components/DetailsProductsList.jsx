import dataFunkoPop from '../Data.json';
import { Link, useParams } from "react-router-dom";

export default function DetailsProductsList() {

    const { funkoId } = useParams();

    const funkoDetails = dataFunkoPop.find((funko) => funko.id === parseInt(funkoId));

    return (
        <div className="details-products-list" >
            <h1>Details {funkoDetails.name}</h1>
            <div className="detailsProducts">
                <img src={funkoDetails.image} alt={funkoDetails.name} />
                <div>
                    <p> {funkoDetails.description} </p>
                    <p> Price: ${funkoDetails.price} </p>
                    <p>Stock: {funkoDetails.stock}</p>
                </div>
            </div>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
}