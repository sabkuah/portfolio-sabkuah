import React, { useState, useEffect } from "react";
import { FiFilter } from "react-icons/fi";

const TechFilter = ({
  projects,
  filterFE,
  filterBE,
  filterDB,
  noFilterCheck,
}) => {
  const [frontEndTech, setFrontEndTech] = useState([]);
  const [backEndTech, setBackEndTech] = useState([]);
  const [dbTech, setDbTech] = useState([]);
  const [FEfilter, setFEfilter] = useState("all");
  const [BEfilter, setBEfilter] = useState("all");
  const [DBfilter, setDBfilter] = useState("all");

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
    noFilterCheck(FEfilter, BEfilter, DBfilter);
  }, [FEfilter, BEfilter, DBfilter]);

  return (
    <div>
      <h5>Filter By:</h5>
      <div class="d-flex row align-items-center justify-content-center">
        <div class="form-group px-2 col">
          <label for="frontEnd">
            <FiFilter /> Front End
          </label>
          <select
            class="form-control"
            id="frontEnd"
            value={FEfilter}
            onChange={(e) => {
              setFEfilter(e.currentTarget.value);
              setBEfilter("all");
              setDBfilter("all");
              filterFE(e.currentTarget.value);
            }}
          >
            <option value="all">All</option>
            {frontEndTech.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div class="form-group px-2 col">
          <label for="backEnd">
            <FiFilter /> Back End
          </label>
          <select
            class="form-control"
            id="backEnd"
            value={BEfilter}
            onChange={(e) => {
              setBEfilter(e.currentTarget.value);
              setFEfilter("all");
              setDBfilter("all");
              filterBE(e.currentTarget.value);
            }}
          >
            <option value="all">All</option>
            {backEndTech.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div class="form-group px-2 col">
          <label for="db">
            <FiFilter /> Database
          </label>
          <select
            class="form-control"
            id="db"
            value={DBfilter}
            onChange={(e) => {
              setDBfilter(e.currentTarget.value);
              setFEfilter("all");
              setBEfilter("all");
              filterDB(e.currentTarget.value);
            }}
          >
            <option value="all">All</option>
            {dbTech.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
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
