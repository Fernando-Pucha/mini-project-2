import { Link, useParams } from "react-router-dom";
import EditProduct from './EditProduct';
import { useState } from 'react';

export default function DetailsProductsList({funkos, updateProduct}) {

    const { funkoId } = useParams();
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const funkoDetails = funkos.find((funko) => funko.id === parseInt(funkoId));

    const handleEditClick = () => {
        setShowUpdateForm(!showUpdateForm);
    };

    const handleFormSubmit = (updatedProduct) => {
        updateProduct(updatedProduct)
        setShowUpdateForm(false);
    };

    return (
        <div className="details-products-list" >
            {showUpdateForm ? (
                <EditProduct dataFunko={funkoDetails} onFormSubmit={handleFormSubmit} onClickFunko={handleEditClick} />
            ) : (
                <>
                    <h1>Details {funkoDetails.name}</h1>
                    <div className="detailsProducts">
                        <img src={funkoDetails.image} alt={funkoDetails.name} />
                        <div>
                            <p> {funkoDetails.description} </p>
                            <p> Price: ${funkoDetails.price} </p>
                            <p>Stock: {funkoDetails.stock}</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Link to="/">
                            <button>Back</button>
                        </Link>
                        <button onClick={handleEditClick}>Update</button>
                    </div>
                </>
            )}
        </div>
    );
}