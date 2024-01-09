
import React from "react";
import DeleteBtn from "./DeleteButton";
import './FormTable.css';

const FormTable = ({ products, onDelete }) => {
  const groupedProducts = {};

  products.forEach((product) => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  const handleDelete = (productId) => {
    onDelete(productId);
  };

  
  return (
    <div className="table">
      <h1>Products</h1>

      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {categoryProducts.map((product, index) => (
              <li key={index}>
                <span>{`${product.id} - ${product.productName} - ${product.price} `}</span>
                <DeleteBtn onDelete={() => handleDelete(product.id)} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FormTable;


