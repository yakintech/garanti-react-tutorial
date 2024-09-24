import React from "react";

function CategoryTable({ categories, deleteCategory }) {
  return (
    <>
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
    </>
  );
}

export default CategoryTable;
