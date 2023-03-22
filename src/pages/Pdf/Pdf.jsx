import React from "react";
import { useLocation } from "react-router-dom";
import { ContainerPDF } from "../../components";

const Pdf = () => {
  const { search } = useLocation();
  console.log(search)
  const revista = search.slice(1)
  return (
    <>
      <ContainerPDF mostrar={revista}/>
    </>
  );
};

export default Pdf;
