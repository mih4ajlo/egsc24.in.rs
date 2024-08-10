"use client";

import React, { useState } from "react";
import { registerForOpen } from "../../../utils/supabase/actions";
import classes from '../../register/register.module.css';

const RegisterOpen = () => {
  const [formData, setFormData] = useState({});

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

    registerForOpen( formData );
  };

  return (
    <form className=" flex flex-col gap-4 my-8 sm:mx-4 mx-auto"  onSubmit={handleSubmit}>
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
        <input
          type="text"
          id="category"
          name="category"
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.row}>
        <label htmlFor="rating">{"Go Rating"}</label>
        <input
          type="text"
          id="rating"
          name="rating"
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.row}>
        <label htmlFor="Club">{"Club"}</label>
        <input
          type="text"
          id="club"
          name="club"
          onChange={handleChange}
          required
        />
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterOpen;
