import React, { useState } from "react";
import VaersdataService from "../services/vaersdataService";


//VAERS_ID,RECVDATE,STATE,AGE_YRS,CAGE_YR,CAGE_MO,SEX,RPT_DATE,SYMPTOM_TEXT,DIED,DATEDIED,L_THREAT,ER_VISIT,HOSPITAL,HOSPDAYS,X_STAY,DISABLE,RECOVD,VAX_DATE,ONSET_DATE,NUMDAYS,LAB_DATA,V_ADMINBY,V_FUNDBY,OTHER_MEDS,CUR_ILL,HISTORY,PRIOR_VAX,SPLTTYPE,FORM_VERS,TODAYS_DATE,BIRTH_DEFECT,OFC_VISIT,ER_ED_VISIT,ALLERGIES
const AddVaersdata = () => {
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
    const [vaersdata, setVaersdata] = useState(initialVaersdataState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setVaersdata({ ...vaersdata, [name]: value });
    };

    const saveVaersdata = () => {
        var data = {
            title: vaersdata.title,
            description: vaersdata.description
        };

        VaersdataDataService.create(data)
            .then(response => {
                setVaersdata({
                    VAERS_ID: response.data.VAERS_ID,
                    RECVDATA: response.data.RECVDATA,
                    STATE: response.data.STATE,
                    AGE_YRS: response.data.AGE_YRS,
                    CAGE_YR: response.data.CAGE_YR,
                    SEX: response.data.SEX,
                    RPT_DATE: response.data.RPT_DATE,
                    SYMPTOM_TEXT: response.data.SYMPTOM_TEXT,
                    DIED: response.data.DIED,
                    DATEDIED: response.data.DATEDIED,
                    L_THREAT: response.data.L_THREAT,
                    ER_VISIT: response.data.ER_VISIT,
                    HOSPITAL: response.data.HOSPITAL,
                    HOSPDAYS: response.data.HOSPDAYS,
                    X_STAY: response.data.X_STAY,
                    DISABLE: response.data.DISABLE, 
                    RECOVD: response.data.RECOVD, 
                    VAX_DATE: response.data.VAX_DATE, 
                    ONSET_DATE: response.data.ONSET_DATE, 
                    NUMDAYS: response.data.NUMDAYS, 
                    LAB_DATA: response.data.LAB_DATA, 
                    V_ADMINBY: response.data.V_ADMINBY, 
                    V_FUNDBY: response.data.V_FUNDBY, 
                    OTHER_MEDS: response.data.OTHER_MEDS, 
                    CUR_ILL: response.data.CUR_ILL, 
                    HISTORY: response.data.HISTORY, 
                    PRIOR_VAX: response.data.PRIOR_VAX, 
                    SPLTTYPE: response.data.SPLTTYPE, 
                    FORM_VERS: response.data.FORM_VERS, 
                    TODAYS_DATE: response.data.TODAYS_DATE, 
                    BIRTH_DEFECT: response.data.BIRTH_DEFECT, 
                    OFC_VISIT: response.data.OFC_VISIT, 
                    ER_ED_VISIT: response.data.ER_ED_VISIT, 
                    ALLERGIES: response.data.ALLERGIES
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newVaersData = () => {
        setVaersdata(initialVaersdataState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newVaersData}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="VAERS_ID">VAERS_ID</label>
            <input
              type="text"
              className="form-control"
              id="VAERS_ID"
              required
              value={vaersdata.VAERS_ID}
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
              required
              value={vaersdata.RECVDATE}
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
              required
              value={vaersdata.STATE}
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
              required
              value={vaersdata.AGE_YRS}
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
              required
              value={vaersdata.CAGE_YRS}
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
              required
              value={vaersdata.CAGE_MO}
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
              required
              value={vaersdata.SEX}
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
              required
              value={vaersdata.RPT_DATE}
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
              required
              value={vaersdata.SYMPTOM_TEXT}
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
              required
              value={vaersdata.DIED}
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
              required
              value={vaersdata.DATEDIED}
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
              required
              value={vaersdata.L_THREAT}
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
              required
              value={vaersdata.ER_VISIT}
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
              required
              value={vaersdata.HOSPITAL}
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
              required
              value={vaersdata.HOSPDAYS}
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
              required
              value={vaersdata.X_STAY}
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
              required
              value={vaersdata.DISABLE}
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
              required
              value={vaersdata.RECOVD}
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
              required
              value={vaersdata.VAX_DATE}
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
              required
              value={vaersdata.ONSET_DATE}
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
              required
              value={vaersdata.NUMDAYS}
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
              required
              value={vaersdata.LAB_DATA}
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
              required
              value={vaersdata.V_ADMINBY}
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
              required
              value={vaersdata.V_FUNDBY}
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
              required
              value={vaersdata.OTHER_MEDS}
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
              required
              value={vaersdata.CUR_ILL}
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
              required
              value={vaersdata.HISTORY}
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
              required
              value={vaersdata.PRIOR_VAX}
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
              required
              value={vaersdata.SPLTTYPE}
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
              required
              value={vaersdata.FORM_VERS}
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
              required
              value={vaersdata.TODAYS_DATE}
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
              required
              value={vaersdata.BIRTH_DEFECT}
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
              required
              value={vaersdata.OFC_VISIT}
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
              required
              value={vaersdata.ER_ED_VISIT}
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
              required
              value={vaersdata.ALLERGIES}
              onChange={handleInputChange}
              name="ALLERGIES"
            />
          </div>


          <button onClick={saveVaersdata} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
    );
};

export default AddVaersdata;