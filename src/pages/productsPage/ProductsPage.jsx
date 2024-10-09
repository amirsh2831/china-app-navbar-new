import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footerMain/footer";
import ProductsPage from "../../components/productsPage/ProductsPage";
const Products = () => {
  return (
    <>
      <Navbar />
      <ProductsPage />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Products;
