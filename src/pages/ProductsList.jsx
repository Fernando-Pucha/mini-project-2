import dataFunkoPop from '../Data.json';
import { useState } from "react";

export default function ProductsList() {
    const [funkos, setFunkos] = useState(dataFunkoPop);
    return (
        <div className="ProductsList">
            <h1>Funko Pop!</h1>
            <ul>
                {funkos.map(funko => (
                    <li key={funko.id}>
                        <img src={funko.image} alt={funko.name} />
                        <h2>{funko.name}</h2>
                        <p>{funko.description}</p>
                        <p>Price: ${funko.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}