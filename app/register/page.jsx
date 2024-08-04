"use client";

import React, { useState } from "react";
import { insertData } from "../../utils/supabase/actions";

const Register = () => {
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

    insertData( formData );
  };

  return (
    <form className="w-full flex flex-col gap-4 my-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-2 w-2/3">
        <label htmlFor="e_mail">{"E-mail"}</label>
        <input
          type="text"
          id="e_mail"
          name="e_mail"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2 w-2/3">
        <label htmlFor="first_name">{"First name"}</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2 w-2/3">
        <label htmlFor="last_name">{"Last name"}</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2 w-2/3">
        <label htmlFor="category">{"Go Category"}</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2 w-2/3">
        <label htmlFor="rating">{"Go Rating"}</label>
        <input
          type="text"
          id="rating"
          name="rating"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2 w-2/3">
        <label htmlFor="faculty">{"Faculty"}</label>
        <input
          type="text"
          id="faculty"
          name="faculty"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2 w-2/3">
        <label htmlFor="university">{"University"}</label>
        <input
          type="text"
          id="university"
          name="university"
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-2 w-2/3 w-max">
        <label htmlFor="level_of_studies">{"Level of studies"}</label>
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
      <div className="grid grid-cols-2 gap-2 w-2/3">
        <label htmlFor="country">{"Country"}</label>
        <input
          type="text"
          id="country"
          name="country"
          onChange={handleChange}
          required
        />
      </div>
      <button className=" btn btn-blue" type="submit">Submit</button>
    </form>
  );
};

export default Register;
