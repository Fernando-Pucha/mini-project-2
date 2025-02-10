import { Link } from "react-router-dom";

export default function ProductsList({ key, funko, handleDelete }) {

    return (
        <li key={key}>

            <Link to={`/funkoDetails/${funko.id}`}>
                <div>
                    <img src={funko.image} alt={funko.name} />
                    <h2>{funko.name}</h2>
                    <p>Price: ${funko.price}</p>
                </div>
            </Link>

            <div className='buttons'>
                <button onClick={() => handleDelete(funko.id)}>Delete</button>
                <button> ♡ </button>
            </div>
        </li>
    )
}