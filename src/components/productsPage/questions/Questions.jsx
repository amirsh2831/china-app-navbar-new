import React from "react";
import "./Questions.scss";
import { ProductsQAndA } from "../../../constants";
const Questions = () => {
  return (
    <>
      <div className="products-page-questions-container">
        <h3>Questions & Answers on Made In China</h3>
        {ProductsQAndA.map((item, i) => (
          <div className="products-page-questions-item" key={i}>
            <div className="products-page-questions-item-title">
              <div id="products-question-icon">Q</div>
              <h4>{item.question}</h4>
            </div>
            <div className="products-page-questions-item-body">
              <div id="products-answer-icon">A</div>
              <h5>{item.answer}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Questions;
