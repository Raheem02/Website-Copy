/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />

      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Code <i className="bx bx-right-arrow-alt work__button-icon" id="arrow"></i>
      </a>
    </div>
  );
};

export default WorkItems;
