import React from "react";

function CategoryFooter({ operation }) {
  return (
    <>
      <button onClick={() => operation.emptyCategories()}>Delete All</button>
    </>
  );
}

export default CategoryFooter;
