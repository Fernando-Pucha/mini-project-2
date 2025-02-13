import { useState } from "react";
import dataFunkoPop from '../Data.json';

export default function EditProduct({ dataFunko, onFormSubmit }) {

    const [name, setName] = useState(dataFunko.name);
    const [description, setDescription] = useState(dataFunko.description);
    const [brand, setBrand] = useState(dataFunko.brand);
    const [model, setModel] = useState(dataFunko.model);
    const [price, setPrice] = useState(dataFunko.price);
    const [image, setImage] = useState(dataFunko.image);
    const [category, setCategory] = useState(dataFunko.category);
    const [stock, setStock] = useState(dataFunko.stock);


    const handleNameInput = e => setName(e.target.value);
    const handleDescriptionInput = e => setDescription(e.target.value);
    const handleBrandInput = e => setBrand(e.target.value);
    const handleModelInput = e => setModel(e.target.value);
    const handlePriceInput = e => setPrice(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCategoryInput = e => setCategory(e.target.value);
    const handleStockInput = e => setStock(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateProduct = {
            id: dataFunko.id,
            name,
            description,
            brand,
            model,
            price,
            image,
            category,
            stock
        };

        onFormSubmit(updateProduct);
    }

    return (
        <form className="formAddProduct" onSubmit={handleSubmit}>
            <span>Update Product</span>
            <div className="form-grid">
                <input name="name" type="text" placeholder="Product Name" value={name} onChange={handleNameInput} />
                <textarea name="description" placeholder="Product Description" value={description} onChange={handleDescriptionInput} />
                <input name="brand" type="text" placeholder="Brand" value={brand} onChange={handleBrandInput} />
                <input name="model" type="text" placeholder="Model" value={model} onChange={handleModelInput} />
                <input name="price" type="number" placeholder="Price" value={price} onChange={handlePriceInput} />
                <input name="image" type="url" placeholder="Product Image URL" value={image} onChange={handleImageInput} />
                <input name="category" type="text" placeholder="Category" value={category} onChange={handleCategoryInput} />
                <input name="stock" type="number" placeholder="Stock Quantity" value={stock} onChange={handleStockInput} />
            </div>

            <button type="submit">Update Product</button>

        </form>
    );
}
