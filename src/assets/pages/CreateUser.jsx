import axios from "axios";
import { useForm } from "react-hook-form";
import "./style/createUser.css";

const CreateUser = () => {
  const { register, handleSubmit } = useForm();

  const sumbit = (data) => {
    createUser(data);
  };

  const createUser = (data) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users";
    axios
      .post(URL, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="create-container">
      <form className="create__form" onSubmit={handleSubmit(sumbit)}>
        <h2 className="create__form-title">Create User</h2>

        <div className="create__form-div">
          <label className="create__form-firstName">First Name</label>
          <input
            className="create__form-firstName-input"
            type="text"
            {...register("firstName")}
          />
        </div>

        <div className="create__form-div">
          <label className="create__form-lastName">Last Name</label>
          <input
            type="text"
            className="create__form-lastName-input"
            {...register("lastName")}
          />
        </div>

        <div className="create__form-div">
          <label className="create__form-email">Email</label>
          <input
            type="email"
            className="create__form-email-input"
            {...register("email")}
          />
        </div>

        <div className="create__form-div">
          <label className="create__form-password">Password</label>
          <input
            className="create__form-password-input"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="create__form-div">
          <label className="create__form-phone">Phone -10 characters-</label>
          <input
            type="number"
            className="create__form-phone-input"
            {...register("phone")}
          />
        </div>

        <div className="create__form-div">
          <label className="create__form-role">ROLE</label>
          <input
            type="text"
            className="create__form-role-input"
            {...register("role")}
          />
        </div>
        <button className="create__form-btn">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
