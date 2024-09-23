import React from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();

  return (
    <>
      <h1>Detail Page</h1>
      <h3>Id: {id}</h3>
    </>
  );
}

export default BlogDetail;
