import React, { useState, useEffect } from "react";
import VaersDataService from "../services/vaersdataService";
import { Link } from "react-router-dom";

const VaersdataList = () => {
  const [vaersdata, setVaersdata] = useState([]);
  const [currentVaersdata, setCurrentVaersdata] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    retrieveVaersdata();
  }, []);

  const onChangeSearchId = e => {
    const searchId = e.target.value;
    setSearchId(searchId);
  };

  const retrieveVaersdata = () => {
    VaersDataService.getAll()
      .then(response => {
        setVaersdata(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveVaersdata();
    setCurrentVaersdata(null);
    setCurrentIndex(-1);
  };

  const setActiveVaersdata = (vaersdatas, index) => {
    setCurrentVaersdata(vaersdatas);
    setCurrentIndex(index);
  };

  const removeAllVaersdata = () => {
    VaersDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findById = () => {
    VaersDataService.findById(searchId)
      .then(response => {
        setVaersdata(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Id"
            value={searchId}
            onChange={onChangeSearchId}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findById}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Vaersdata List</h4>

        <ul className="list-group">
          {vaersdata &&
            vaersdata.map((vaersdata, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveVaersdata(vaersdata, index)}
                key={index}
              >
                {vaersdata.VAERS_ID}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllVaersdata}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentVaersdata ? (
          <div>
            <h4>Vaersdata</h4>
            <div>
              <label>
                <strong>VAERS_ID:</strong>
              </label>{" "}
              {setCurrentVaersdata.VAERS_ID}
            </div>
            <div>
              <label>
                <strong>Age:</strong>
              </label>{" "}
              {setCurrentVaersdata.AGE_YRS}
            </div>
            <div>
              <label>
                <strong>Sex:</strong>
              </label>{" "}
              {setCurrentVaersdata.SEX ? "F" : "M"}
            </div>

            <Link
              to={"/vaersdata/" + currentVaersdata.VAERS_ID}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a entry...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VaersdataList;