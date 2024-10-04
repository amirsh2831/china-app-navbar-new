import React from "react";
import "./Products.scss";
import Contentslider from "../contentslider/Contentslider";
import { IndustryItems, IndustryItemsCat } from "../data";
import { useInViewContext } from "../../../Context/ContextProvider";
const Products = () => {
  const {
    section2Ref,
    section3Ref,
    section4Ref,
    section5Ref,
    section6Ref,
    section7Ref,
    section8Ref,
  } = useInViewContext();
  return (
    <>
      <div className="prod" id="prod-2" ref={section2Ref}>
        <h1 className="prod-title">Light Industry & Daily Use</h1>
        <Contentslider
          products={IndustryItems}
          cat={IndustryItemsCat}
          initial={5}
        />
        <div className="prod-bg-icon gift"></div>
      </div>
      <div className="prod" id="prod-3" ref={section3Ref}>
        <h1 className="prod-title">Apparel & Accessories</h1>
        <Contentslider
          products={IndustryItems}
          cat={IndustryItemsCat}
          initial={5}
        />
        <div className="prod-bg-icon dress"></div>
      </div>
      <div className="prod" id="prod-4" ref={section4Ref}>
        <h1 className="prod-title">Sporting Goods & Recreation</h1>
        <Contentslider
          products={IndustryItems}
          cat={IndustryItemsCat}
          initial={5}
        />
        <div className="prod-bg-icon baseball"></div>
      </div>
      <div className="prod" id="prod-5" ref={section5Ref}>
        <h1 className="prod-title">Consumer Electronics</h1>
        <Contentslider
          products={IndustryItems}
          cat={IndustryItemsCat}
          initial={5}
        />
        <div className="prod-bg-icon picture"></div>
      </div>
      <div className="prod" id="prod-6" ref={section6Ref}>
        <h1 className="prod-title">Arts & Crafts</h1>
        <Contentslider
          products={IndustryItems}
          cat={IndustryItemsCat}
          initial={5}
        />
        <div className="prod-bg-icon ring"></div>
      </div>
      <div className="prod" id="prod-7" ref={section7Ref}>
        <h1 className="prod-title">Bags, Cases & Boxes</h1>
        <Contentslider
          products={IndustryItems}
          cat={IndustryItemsCat}
          initial={5}
        />
        <div className="prod-bg-icon cases"></div>
      </div>
      <div className="prod" id="prod-8" ref={section8Ref}>
        <h1 className="prod-title">Textile</h1>
        <Contentslider
          products={IndustryItems}
          cat={IndustryItemsCat}
          initial={5}
        />
        <div className="prod-bg-icon napkin"></div>
      </div>
    </>
  );
};

export default Products;
