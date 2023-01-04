import React from "react";
import "./style/createUser.css";

const CreateUser = () => {
  return (
    <div className="create-container">
      <form className="create__form">
        <h2 className="create__form-title">Create User</h2>
        <div className="create__form-div">
          <label className="create__form-email">Email</label>
          <input type="email" className="create__form-email-input" />
        </div>
        <div className="create__form-div">
          <label className="create__form-firstName">First Name</label>
          <input className="create__form-firstName-input" type="text" />
        </div>
        <div className="create__form-div">
          <label className="create__form-lastName">Last Name</label>
          <input type="text" className="create__form-lastName-input" />
        </div>
        <div className="create__form-div">
          <label className="create__form-password">Password</label>
          <input className="create__form-password-input" type="password" />
        </div>
        <div className="create__form-div">
          <label className="create__form-phone">Phone -10 characters-</label>
          <input type="number" className="create__form-phone-input" />
        </div>
        <button className="create__form-btn">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
