import { useState } from "react";
export default function AddProduct({ counterIdFunkos, addProduct }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');


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
        const newProduct = {
            id: counterIdFunkos,
            name,
            description,
            brand,
            model,
            price,
            image,
            category,
            stock
        };

        addProduct(newProduct);
        
        setName('');
        setDescription('');
        setBrand('');
        setModel('');
        setPrice('');
        setImage('');
        setCategory('');
        setStock('');
    }

    return (
        <form className="formAddProduct" onSubmit={handleSubmit}>
            <span>Add a Product</span>
            <div className="form-grid">
                <input name="name" type="text" placeholder="Product Name" value={name} onChange={handleNameInput} />
                <textarea name="description" placeholder="Product Description" value={description} onChange={handleDescriptionInput} />
                <input name="brand" type="text" placeholder="Brand" value={brand} onChange={handleBrandInput} />
                <input name="model" type="text" placeholder="Model" value={model} onChange={handleModelInput} />
                <input name="price" type="number" placeholder="Price €" value={price} onChange={handlePriceInput} />
                <input name="image" type="url" placeholder="Product Image URL" value={image} onChange={handleImageInput} />
                <input name="category" type="text" placeholder="Category" value={category} onChange={handleCategoryInput} />
                <input name="stock" type="number" placeholder="Stock Quantity" value={stock} onChange={handleStockInput} />
            </div>

            <button type="submit">Add Product</button>

        </form>
    );
}
