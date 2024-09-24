import React from "react";
import "./SuppliersMainCategories.scss";
import Category from "./Category/Category";
import BussinessType from "./BusinessType/BussinessType";
import TradeCapacity from "./TradeCapacity/TradeCapacity";
import ManagementCertefication from "./ManagementCertefication/ManagementCertefication";
import AnnualRevenue from "./anualRevenue/AnnulaRevenue";
import NoOfEmployees from "./NoOfEmployees/NoOfEmployees";
import ProvinceAndRegion from "./ProvinceAndRegion/ProvinceAndRegion";
import MemberAndType from "./MemberAndType/MemberAndType";
const SuppliersMainCategories = () => {
  return (
    <>
      <div className="suppliers-main-categories">
        <Category />
        <BussinessType />
        <TradeCapacity />
        <ManagementCertefication />
        <AnnualRevenue />
        <NoOfEmployees />
        <ProvinceAndRegion />
        <MemberAndType />
      </div>
    </>
  );
};

export default SuppliersMainCategories;
