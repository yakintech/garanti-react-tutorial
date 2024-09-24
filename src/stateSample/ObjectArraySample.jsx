import React, { useState } from "react";
import { categoriesData } from "../data/categoriesData";

function ObjectArraySample() {
  const [categories, setcategories] = useState(categoriesData);

  const deleteCategory = (id) => {
    let newCategories = categories.filter((q) => q.id != id);
    setcategories(newCategories);
  };

  return (
    <>
      <h1>Categories Length: {categories.length}</h1>
      <hr />    
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Category Name</th>
            <th>Category Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button onClick={() => deleteCategory(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <hr />
      <button onClick={() => setcategories([])}>Clear</button>
    </>
  );
}

export default ObjectArraySample;
