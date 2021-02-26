import { prettyDOM } from "@testing-library/react";
import React, { useState, useEffect } from "react";

const TechFilter = ({ projects }) => {
  const [frontEndTech, setFrontEndTech] = useState([]);
  const [backEndTech, setBackEndTech] = useState([]);
  const [dbTech, setDbTech] = useState([]);

  const getFrontEnd = () => {
    let frontEndTech = [];

    projects.forEach((p) => {
      p.frontEnd.forEach((t) => {
        frontEndTech.push(t);
      });
    });

    const newArray = Array.from(new Set(frontEndTech));
    setFrontEndTech(newArray);
  };

  const getBackEnd = () => {
    let backEndTech = [];

    projects.forEach((p) => {
      p.backEnd.forEach((t) => {
        backEndTech.push(t);
      });
    });

    const newArray = Array.from(new Set(backEndTech));
    setBackEndTech(newArray);
  };

  const getDatabases = () => {
    let dbs = [];

    projects.forEach((p) => {
      if (p.database) {
        p.database.forEach((db) => {
          dbs.push(db);
        });
      }
    });

    const newArray = Array.from(new Set(dbs));
    setDbTech(newArray);
  };

  useEffect(() => {
    getFrontEnd();
    getBackEnd();
    getDatabases();
  }, []);

  return (
    <div>
      <h5>Filter By:</h5>
      <div class="d-flex row align-items-center justify-content-center">
        <div class="form-group px-2 col">
          <select class="form-control" id="frontEnd">
            <option>Front End</option>
            {frontEndTech.map((t) => (
              <option>{t}</option>
            ))}
          </select>
        </div>
        <div class="form-group px-2 col">
          <select class="form-control" id="backEnd">
            <option>Back End</option>
            {backEndTech.map((t) => (
              <option>{t}</option>
            ))}
          </select>
        </div>
        <div class="form-group px-2 col">
          <select class="form-control" id="db">
            <option>Database</option>
            {dbTech.map((t) => (
              <option>{t}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  // <button
  //   onClick={() => onFilterSelect(t)}
  //   className={t === selectedFilter ? "filter-btn-active" : "filter-btn"}
  // >
  //   {t}
  // </button>
};

export default TechFilter;
