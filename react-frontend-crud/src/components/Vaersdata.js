import React, { useState, useEffect } from "react";
import VaersdataService from "../services/vaersdataService";

const Vaersdata = props => {
  const initialVaersdataState = {
    VAERS_ID: null,
        RECVDATA: null,
        STATE: null,
        AGE_YRS: null,
        CAGE_YR: null,
        SEX: null,
        RPT_DATE: null,
        SYMPTOM_TEXT: null,
        DIED: null,
        DATEDIED: null,
        L_THREAT: null,
        ER_VISIT: null,
        HOSPITAL: null,
        HOSPDAYS: null,
        X_STAY: null,
        DISABLE: null,
        RECOVD: null,
        VAX_DATE: null,
        ONSET_DATE: null,
        NUMDAYS: null,
        LAB_DATA: null,
        V_ADMINBY: null,
        V_FUNDBY: null,
        OTHER_MEDS: null,
        CUR_ILL: null,
        HISTORY: null,
        PRIOR_VAX: null,
        SPLTTYPE: null,
        FORM_VERS: null,
        TODAYS_DATE: null,
        BIRTH_DEFECT: null,
        OFC_VISIT: null,
        ER_ED_VISIT: null,
        ALLERGIES: null
  };
  const [currentVaersdata, setCurrentVaersdata] = useState(initialVaersdataState);
  const [message, setMessage] = useState("");

  const getVaersdata = VAERS_ID => {
    VaersdataService.get(VAERS_ID)
      .then(response => {
        setCurrentVaersdata(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getVaersdata(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentVaersdata({ ...currentVaersdata, [name]: value });
  };

  /*const updateVaersdataskibibibi = status => {
    var data = {
      VAERS_ID: currentVaersdata.VAERS_ID,
      RECVDATA: currentVaersdata.RECVDATA,
      STATE: currentVaersdata.STATE,
      AGE_YRS: currentVaersdata.AGE_YRS,
      CAGE_YR: currentVaersdata.CAGE_YR,
      SEX: currentVaersdata.SEX,
      RPT_DATE: currentVaersdata.RPT_DATE,
      SYMPTOM_TEXT: currentVaersdata.SYMPTOM_TEXT,
      DIED: currentVaersdata.DIED,
      DATEDIED: currentVaersdata.DATEDIED,
      L_THREAT: currentVaersdata.L_THREAT,
      ER_VISIT: currentVaersdata.ER_VISIT,
      HOSPITAL: currentVaersdata.HOSPITAL,
      HOSPDAYS: currentVaersdata.HOSPDAYS,
      X_STAY: currentVaersdata.X_STAY,
      DISABLE: currentVaersdata.DISABLE, 
      RECOVD: currentVaersdata.RECOVD, 
      VAX_DATE: currentVaersdata.VAX_DATE, 
      ONSET_DATE: currentVaersdata.ONSET_DATE, 
      NUMDAYS: currentVaersdata.NUMDAYS, 
      LAB_DATA: currentVaersdata.LAB_DATA, 
      V_ADMINBY: currentVaersdata.V_ADMINBY, 
      V_FUNDBY: currentVaersdata.V_FUNDBY, 
      OTHER_MEDS: currentVaersdata.OTHER_MEDS, 
      CUR_ILL: currentVaersdata.CUR_ILL, 
      HISTORY: currentVaersdata.HISTORY, 
      PRIOR_VAX: currentVaersdata.PRIOR_VAX, 
      SPLTTYPE: currentVaersdata.SPLTTYPE, 
      FORM_VERS: currentVaersdata.FORM_VERS, 
      TODAYS_DATE: currentVaersdata.TODAYS_DATE, 
      BIRTH_DEFECT: currentVaersdata.BIRTH_DEFECT, 
      OFC_VISIT: currentVaersdata.OFC_VISIT, 
      ER_ED_VISIT: currentVaersdata.ER_ED_VISIT, 
      ALLERGIES: currentVaersdata.ALLERGIES
    };

    VaersdataService.update(currentVaersdata.VAERS_ID, data)
      .then(response => {
        setCurrentVaersdata({ ...currentVaersdata });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  */

  const updateVaersdata = () => {
    VaersdataService.update(currentVaersdata.VAERS_ID, currentVaersdata)
      .then(response => {
        console.log(response.data);
        setMessage("The entry was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteVaersdata = () => {
    VaersdataService.remove(currentVaersdata.VAERS_ID)
      .then(response => {
        console.log(response.data);
        props.history.push("/vaersdata");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentVaersdata ? (
        <div className="edit-form">
          <h4>Data entry</h4>
          <form>
          <div className="form-group">
            <label htmlFor="VAERS_ID">VAERS_ID</label>
            <input
              type="text"
              className="form-control"
              id="VAERS_ID"

              value={currentVaersdata.VAERS_ID}
              onChange={handleInputChange}
              name="VAERS_ID"
            />
          </div>

          <div className="form-group">
            <label htmlFor="RECVDATE">Recovery Date</label>
            <input
              type="text"
              className="form-control"
              id="RECVDATE"

              value={currentVaersdata.RECVDATE}
              onChange={handleInputChange}
              name="RECVDATE"
            />
          </div>

          <div className="form-group">
            <label htmlFor="STATE">State</label>
            <input
              type="text"
              className="form-control"
              id="STATE"

              value={currentVaersdata.STATE}
              onChange={handleInputChange}
              name="STATE"
            />
          </div>

          <div className="form-group">
            <label htmlFor="AGE_YRS">Age</label>
            <input
              type="text"
              className="form-control"
              id="AGE_YRS"

              value={currentVaersdata.AGE_YRS}
              onChange={handleInputChange}
              name="AGE_YRS"
            />
          </div>

          <div className="form-group">
            <label htmlFor="CAGE_YRS">Case Age</label>
            <input
              type="text"
              className="form-control"
              id="CAGE_YRS"

              value={currentVaersdata.CAGE_YRS}
              onChange={handleInputChange}
              name="CAGE_YRS"
            />
          </div>

          <div className="form-group">
            <label htmlFor="CAGE_MO">Case Months</label>
            <input
              type="text"
              className="form-control"
              id="CAGE_MO"

              value={currentVaersdata.CAGE_MO}
              onChange={handleInputChange}
              name="CAGE_MO"
            />
          </div>

          <div className="form-group">
            <label htmlFor="SEX">Sex (F OR M)</label>
            <input
              type="text"
              className="form-control"
              id="SEX"

              value={currentVaersdata.SEX}
              onChange={handleInputChange}
              name="SEX"
            />
          </div>

          <div className="form-group">
            <label htmlFor="RPT_DATE">Repeat Date</label>
            <input
              type="text"
              className="form-control"
              id="RPT_DATE"

              value={currentVaersdata.RPT_DATE}
              onChange={handleInputChange}
              name="RPT_DATE"
            />
          </div>

          <div className="form-group">
            <label htmlFor="SYMPTOM_TEXT">Symptom Text</label>
            <input
              type="text"
              className="form-control"
              id="SYMPTOM_TEXT"

              value={currentVaersdata.SYMPTOM_TEXT}
              onChange={handleInputChange}
              name="SYMPTOM_TEXT"
            />
          </div>

          <div className="form-group">
            <label htmlFor="DIED">Died (Y or empty)</label>
            <input
              type="text"
              className="form-control"
              id="DIED"

              value={currentVaersdata.DIED}
              onChange={handleInputChange}
              name="DIED"
            />
          </div>

          <div className="form-group">
            <label htmlFor="DATEDIED">Date died (MM-DD-YYYY)</label>
            <input
              type="text"
              className="form-control"
              id="DATEDIED"

              value={currentVaersdata.DATEDIED}
              onChange={handleInputChange}
              name="DATEDIED"
            />
          </div>

          <div className="form-group">
            <label htmlFor="L_THREAT">Life threatening (Y or empty)</label>
            <input
              type="text"
              className="form-control"
              id="L_THREAT"

              value={currentVaersdata.L_THREAT}
              onChange={handleInputChange}
              name="L_THREAT"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ER_VISIT">ER visit (Y or empty)</label>
            <input
              type="text"
              className="form-control"
              id="ER_VISIT"

              value={currentVaersdata.ER_VISIT}
              onChange={handleInputChange}
              name="ER_VISIT"
            />
          </div>

          <div className="form-group">
            <label htmlFor="HOSPITAL">Hospital visit (Y or empty)</label>
            <input
              type="text"
              className="form-control"
              id="HOSPITAL"

              value={currentVaersdata.HOSPITAL}
              onChange={handleInputChange}
              name="HOSPITAL"
            />
          </div>

          <div className="form-group">
            <label htmlFor="HOSPDAYS">Days in Hospital</label>
            <input
              type="text"
              className="form-control"
              id="HOSPDAYS"

              value={currentVaersdata.HOSPDAYS}
              onChange={handleInputChange}
              name="HOSPDAYS"
            />
          </div>

          <div className="form-group">
            <label htmlFor="X_STAY">X_STAY (Y or empty)</label>
            <input
              type="text"
              className="form-control"
              id="X_STAY"

              value={currentVaersdata.X_STAY}
              onChange={handleInputChange}
              name="X_STAY"
            />
          </div>

          <div className="form-group">
            <label htmlFor="DISABLE">Disabled (Y or empty)</label>
            <input
              type="text"
              className="form-control"
              id="DISABLE"

              value={currentVaersdata.DISABLE}
              onChange={handleInputChange}
              name="DISABLE"
            />
          </div>

          <div className="form-group">
            <label htmlFor="RECOVD">Recovered (Y or empty)</label>
            <input
              type="text"
              className="form-control"
              id="RECOVD"

              value={currentVaersdata.RECOVD}
              onChange={handleInputChange}
              name="RECOVD"
            />
          </div>

          <div className="form-group">
            <label htmlFor="VAX_DATE">Vaccination date (MM-DD-YYYY)</label>
            <input
              type="text"
              className="form-control"
              id="VAX_DATE"

              value={currentVaersdata.VAX_DATE}
              onChange={handleInputChange}
              name="VAX_DATE"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ONSET_DATE">Onset date (MM-DD-YYYY)</label>
            <input
              type="text"
              className="form-control"
              id="ONSET_DATE"

              value={currentVaersdata.ONSET_DATE}
              onChange={handleInputChange}
              name="ONSET_DATE"
            />
          </div>

          <div className="form-group">
            <label htmlFor="NUMDAYS">amount of days between vax and onset</label>
            <input
              type="text"
              className="form-control"
              id="NUMDAYS"

              value={currentVaersdata.NUMDAYS}
              onChange={handleInputChange}
              name="NUMDAYS"
            />
          </div>

          <div className="form-group">
            <label htmlFor="LAB_DATA">Lab data</label>
            <input
              type="text"
              className="form-control"
              id="LAB_DATA"

              value={currentVaersdata.LAB_DATA}
              onChange={handleInputChange}
              name="LAB_DATA"
            />
          </div>

          <div className="form-group">
            <label htmlFor="V_ADMINBY">Vaccine administered by</label>
            <input
              type="text"
              className="form-control"
              id="V_ADMINBY"

              value={currentVaersdata.V_ADMINBY}
              onChange={handleInputChange}
              name="V_ADMINBY"
            />
          </div>

          <div className="form-group">
            <label htmlFor="V_FUNDBY">Vaccine funded by</label>
            <input
              type="text"
              className="form-control"
              id="V_FUNDBY"

              value={currentVaersdata.V_FUNDBY}
              onChange={handleInputChange}
              name="V_FUNDBY"
            />
          </div>

          <div className="form-group">
            <label htmlFor="OTHER_MEDS">Other medications</label>
            <input
              type="text"
              className="form-control"
              id="OTHER_MEDS"

              value={currentVaersdata.OTHER_MEDS}
              onChange={handleInputChange}
              name="OTHER_MEDS"
            />
          </div>

          <div className="form-group">
            <label htmlFor="CUR_ILL">Current Illness's</label>
            <input
              type="text"
              className="form-control"
              id="CUR_ILL"

              value={currentVaersdata.CUR_ILL}
              onChange={handleInputChange}
              name="CUR_ILL"
            />
          </div>

          <div className="form-group">
            <label htmlFor="HISTORY">History with anything medical</label>
            <input
              type="text"
              className="form-control"
              id="HISTORY"

              value={currentVaersdata.HISTORY}
              onChange={handleInputChange}
              name="HISTORY"
            />
          </div>

          <div className="form-group">
            <label htmlFor="PRIOR_VAX">Prior vaccinations</label>
            <input
              type="text"
              className="form-control"
              id="PRIOR_VAX"

              value={currentVaersdata.PRIOR_VAX}
              onChange={handleInputChange}
              name="PRIOR_VAX"
            />
          </div>

          <div className="form-group">
            <label htmlFor="SPLTTYPE">SPLTTYPE</label>
            <input
              type="text"
              className="form-control"
              id="SPLTTYPE"

              value={currentVaersdata.SPLTTYPE}
              onChange={handleInputChange}
              name="SPLTTYPE"
            />
          </div>

          <div className="form-group">
            <label htmlFor="FORM_VERS">Form version</label>
            <input
              type="text"
              className="form-control"
              id="FORM_VERS"

              value={currentVaersdata.FORM_VERS}
              onChange={handleInputChange}
              name="FORM_VERS"
            />
          </div>

          <div className="form-group">
            <label htmlFor="TODAYS_DATE">Todays date</label>
            <input
              type="text"
              className="form-control"
              id="TODAYS_DATE"

              value={currentVaersdata.TODAYS_DATE}
              onChange={handleInputChange}
              name="TODAYS_DATE"
            />
          </div>

          <div className="form-group">
            <label htmlFor="BIRTH_DEFECT">Birth defect</label>
            <input
              type="text"
              className="form-control"
              id="BIRTH_DEFECT"

              value={currentVaersdata.BIRTH_DEFECT}
              onChange={handleInputChange}
              name="BIRTH_DEFECT"
            />
          </div>

          <div className="form-group">
            <label htmlFor="OFC_VISIT">Visited doctors office (Y or empty)</label>
            <input
              type="text"
              className="form-control"
              id="OFC_VISIT"

              value={currentVaersdata.OFC_VISIT}
              onChange={handleInputChange}
              name="OFC_VISIT"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ER_ED_VISIT">Visited ER (Y or empty)</label>
            <input
              type="text"
              className="form-control"
              id="ER_ED_VISIT"

              value={currentVaersdata.ER_ED_VISIT}
              onChange={handleInputChange}
              name="ER_ED_VISIT"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ALLERGIES">Allergies</label>
            <input
              type="text"
              className="form-control"
              id="ALLERGIES"

              value={currentVaersdata.ALLERGIES}
              onChange={handleInputChange}
              name="ALLERGIES"
            />
          </div>



          </form>

          <button className="badge badge-danger mr-2" onClick={deleteVaersdata}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateVaersdata}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a entry...</p>
        </div>
      )}
    </div>
  );
};

export default Vaersdata;