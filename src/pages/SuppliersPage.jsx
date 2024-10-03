import React from "react";
import Navbar from "./components/navbar/Navbar";
import SupplierMain from "./components/suppliersMainPage/SuppliersMain";
import Footer from "./components/footer/footer";
import SuppliersMobilieSubNav from "./components/suppliersMainPage/suppliersMobileSubNab/SuppliersMobilieSubNav";
const SuppliersPage = () => {
  return (
    <>
      <Navbar />
      <SupplierMain />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SuppliersPage;
