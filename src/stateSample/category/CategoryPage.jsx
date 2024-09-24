import React, { useState } from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryTable from "./CategoryTable";
import CategoryFooter from "./CategoryFooter";
import { categoriesData } from "../../data/categoriesData";

function CategoryPage() {
  const [categories, setcategories] = useState(categoriesData);

  const deleteCategory = (id) => {
    let newCategories = categories.filter((q) => q.id != id);
    setcategories(newCategories);
  };


  const emptyCategories = () => {
    setcategories([]);
  }

  return (
    <>
      <CategoryHeader categories={categories} />
      <CategoryTable categories={categories} deleteCategory={deleteCategory} />
      <CategoryFooter operation={{emptyCategories:emptyCategories}} />
    </>
  );
}

export default CategoryPage;
