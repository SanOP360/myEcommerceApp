// DeleteButton.js
import React from "react";
import './DeleteButton.css';
const DeleteBtn = ({onDelete}) => {
  return (
    <button className="delBtn" type="button" onClick={onDelete}>
      Delete item
    </button>
  );
};

export default DeleteBtn;
