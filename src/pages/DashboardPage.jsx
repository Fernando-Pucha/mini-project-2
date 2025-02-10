import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import dataFunkoPop from '../Data.json';
import { useState } from "react";

export default function DashboardPage() {
    const [funkos, setFunkos] = useState(dataFunkoPop);

    const handleDelete = (idToDelete) => {
        const updatedFunkos = funkos.filter((funko) => funko.id !== idToDelete);
        setFunkos(updatedFunkos);
    };


    return (
        <div className="ProductsList">
            <h1>Funko Pop!</h1>

            <ul>
                {funkos.map(funko => (
                    <ProductsList funko={funko} handleDelete={handleDelete} />
                ))}
            </ul>


        </div>
    );
}