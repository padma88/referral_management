import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { create } from "../../services/users";

import styles from "./Style.module.scss";

function Signup() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [formValue, setFormValue] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await create({
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      password: formValue.password,
      role: "ADMIN"
    });
    navigate("/")
  };
  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormValue({...formValue, [name]: value});
  };
  return (
    <main className={styles.containerFluid}>
      <section className={styles.section}>
        <h1>Ref+</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h4 className={styles.header}>Sign up for free and experience Ref+ today</h4>
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">First Name</label>
            <input className="form-control" type="text" name="firstName" id="firstName" onChange={handleFormInput}/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lastName">Last Name</label>
            <input className="form-control" type="text" name="lastName" id="lastName" onChange={handleFormInput}/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input className="form-control" type="email" name="email" id="email" onChange={handleFormInput}/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" id="password" onChange={handleFormInput}/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
            <input className="form-control" type="password" name="confirmPassword" id="confirmPassword" onChange={handleFormInput}/>
          </div>
          <div className="form-group">
            <button type="submit" className="mt-3 form-control btn btn-primary">Create your Account</button>
          </div>
          <div className={styles.registerLink}>
            <span>Having an account already?</span><Link to="/">Login</Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Signup;
