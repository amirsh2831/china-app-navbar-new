import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footerMain/footer";
import SecuredProductsPage from "../../components/securedProductsPage/SecuredProductsPage";

const SecuredTrading = () => {
  return (
    <>
      <Navbar />
      <SecuredProductsPage />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SecuredTrading;
