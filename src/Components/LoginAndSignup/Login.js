/*
  Login Module with SCSS and React-bootstrap
*/

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Style.module.scss";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

import { loginService } from "../../services/users";
import { login } from "../../store/user";

function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [formValue, setFormValue] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginService(formValue).then(response => {
      dispatch(login(response.data.statusCode === 200));
      localStorage.setItem("access-token", response.data.access_token);
    });
    navigate("/")
  };
  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormValue({...formValue, [name]: value});
  };
  return (
    <Container fluid className={styles.containerFluid}>
      <section className={styles.section}>
        <h1>Ref+</h1>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <h4 className={styles.header}>Login</h4>
          <FormGroup className={styles.formGroup}>
            <FormLabel htmlFor="email">User Name or Email Address</FormLabel>
            <FormControl
              type="text"
              name="email"
              id="email"
              onChange={handleFormInput}
            />
          </FormGroup>
          <FormGroup className={styles.formGroup}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormControl
              type="password"
              name="password"
              id="password"
              onChange={handleFormInput}
            />
          </FormGroup>
          <FormGroup className={styles.formGroup}>
            <Button type="submit">Login</Button>
          </FormGroup>
          <div className={styles.registerLink}>
            New to Ref+ <Link to="/signup">Create your Account</Link>
          </div>
        </Form>
      </section>
    </Container>
  );
}

export default Login;
