import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import ProductsPage from "./components/productsPage/ProductsPage";
const ProductsPage = () => {
  return (
    <>
     <Navbar />
      <ProductsPage />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default ProductsPage