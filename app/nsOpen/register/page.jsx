"use client";

import React, { useState } from "react";
import { registerForOpen } from "../../../utils/supabase/actions";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="e_mail">{"E-mail"}</label>
        <input
          type="text"
          id="e_mail"
          name="e_mail"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="first_name">{"First name"}</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="last_name">{"Last name"}</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="category">{"Go Category"}</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">{"Go Rating"}</label>
        <input
          type="text"
          id="rating"
          name="rating"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="Club">{"Club"}</label>
        <input
          type="text"
          id="club"
          name="club"
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
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
