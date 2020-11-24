import React from "react";

const TechFilter = (props) => {
  const { technologies, onFilterSelect, selectedFilter } = props;

  return technologies.map((t) => (
    <button
      onClick={() => onFilterSelect(t)}
      className={t === selectedFilter ? "filter-btn-active" : "filter-btn"}
    >
      {t}
    </button>
  ));
};

export default TechFilter;
