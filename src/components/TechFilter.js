import React from "react";

const TechFilter = (props) => {
  const { technologies, onFilterSelect, selectedFilter } = props;

  return technologies.map((t) => (
    <li
      onClick={() => onFilterSelect(t)}
      className={t === selectedFilter ? "filter-btn-active" : "filter-btn"}
    >
      {t}
    </li>
  ));
};

export default TechFilter;
