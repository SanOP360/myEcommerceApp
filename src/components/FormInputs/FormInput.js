// FormInput.js
import React, { useState, useEffect } from "react";
import FormTable from "../FormTable/FormTable";
import "./FormInput.css";

const FormInput = () => {
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  const [products, setProducts] = useState(storedProducts || []);
  const [newProduct, setNewProduct] = useState({
    id: "",
    price: "",
    productName: "",
    category: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !newProduct.id ||
      !newProduct.price ||
      !newProduct.productName ||
      !newProduct.category
    ) {
      setError(<p>"Please fill in all fields"</p>);
      return;
    }

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setNewProduct({
      id: "",
      price: "",
      productName: "",
      category: "Electronics",
    });
    setError(""); // Clear error when successfully adding a product
  };

  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}

        <label htmlFor="id">Product ID</label>
        <input
          name="id"
          type="number"
          value={newProduct.id}
          onChange={handleInputChange}
        />

        <label htmlFor="price">Price</label>
        <input
          name="price"
          type="number"
          value={newProduct.price}
          onChange={handleInputChange}
        />

        <label htmlFor="ProductName">Product Name</label>
        <input
          name="productName"
          type="text"
          value={newProduct.productName}
          onChange={handleInputChange}
        />

        <label htmlFor="categories">Choose a category</label>
        <select
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
        >
          <option value="Electronics">Electronics</option>
          <option value="SkinCare">SkinCare</option>
          <option value="FoodProduct">Food Product</option>
        </select>

        <button className="AddProducts" type="submit">
          Add Product
        </button>
      </form>

      <FormTable products={products} onDelete={handleDelete} />
    </div>
  );
};

export default FormInput;
