"use client";

import React, { useState } from "react";
import { insertData } from "../../utils/supabase/actions";
import classes from './register.module.css';
import CategoryButton from '../../components/categoryButton'

const Register = () => {
  const [formData, setFormData] = useState({});
  const [submitedFlag, setSubmitFlag] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const res = insertData( formData );

    setSubmitFlag(res);
    window.location.href = "/participants";
  };

  return (
    <>
    
    {submitedFlag && <div>thank you for registation</div>}
    {!submitedFlag && (

    
    <form className=" flex flex-col gap-4 my-8 sm:mx-4 mx-auto" onSubmit={handleSubmit}>
      <div className={classes.row}>
        <label htmlFor="e_mail">{"E-mail"}</label>
        <input
          type="text"
          id="e_mail"
          name="e_mail"
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.row}>
        <label htmlFor="first_name">{"First name"}</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.row}>
        <label htmlFor="last_name">{"Last name"}</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.row}>
        <label htmlFor="category">{"Go Category"}</label>
        <CategoryButton
          name="category"
          handleChange={handleChange}
          required
        />
      </div>
      {/* <div className={classes.row}>
        <label htmlFor="rating">{"Go Rating"}</label>
        <input
          type="text"
          id="rating"
          name="rating"
          onChange={handleChange}
          required
        />
      </div> */}
      <div className={classes.row}>
        <label htmlFor="faculty">{"Faculty"}</label>
        <input
          type="text"
          id="faculty"
          name="faculty"
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.row}>
        <label htmlFor="university">{"University"}</label>
        <input
          type="text"
          id="university"
          name="university"
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.row }>
        <label htmlFor="level_of_studies">{"Studies level"}</label>
        <select
          id="level_of_studies"
          name="degree"
          onChange={handleChange}
          required
        >
          <option value="BS">BS</option>
          <option value="MS">MS</option>
          <option value="PHD">PHD</option>
        </select>
      </div>
      <div className={classes.row}>
        <label htmlFor="country">{"Country"}</label>
        <input
          type="text"
          id="country"
          name="country"
          onChange={handleChange}
          required
        />
      </div>

      <div className={classes.row}>
        <label htmlFor="country">{"Do you need any assistance?"}</label>
        <textarea
          id="note"
          name="note"
          onChange={handleChange}
          required
        />
      </div>
      <button className=" btn btn-blue" type="submit">Register</button>
    </form>
    )}
    </>
  );
};

export default Register;
