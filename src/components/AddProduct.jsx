import { useState } from "react";

export default function AddProduct({ addProduct }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState(0);


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
            name,
            description,
            brand,
            model,
            price,
            image,
            category,
            stock
        };

      /*   addProduct(newProduct); */
      console.log(newProduct)

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
                <label>
                    Name
                    <input name="name" type="text" placeholder="Product Name" value={name} onChange={handleNameInput} />
                </label>

                <label>
                    Description
                    <textarea name="description" placeholder="Product Description" value={description} onChange={handleDescriptionInput} />
                </label>

                <label>
                    Brand
                    <input name="brand" type="text" placeholder="Brand" value={brand} onChange={handleBrandInput} />
                </label>

                <label>
                    Model
                    <input name="model" type="text" placeholder="Model" value={model} onChange={handleModelInput} />
                </label>

                <label>
                    Price
                    <input name="price" type="number" placeholder="Price" value={price} onChange={handlePriceInput} />
                </label>

                <label>
                    Image URL
                    <input name="image" type="url" placeholder="Product Image URL" value={image} onChange={handleImageInput} />
                </label>

                <label>
                    Category
                    <input name="category" type="text" placeholder="Category" value={category} onChange={handleCategoryInput} />
                </label>

                <label>
                    Stock Quantity
                    <input name="stock" type="number" placeholder="Stock Quantity" value={stock} onChange={handleStockInput} />
                </label>

                
            </div>

            <button type="submit">Add Product</button>
            
        </form>
    );
}
