import React, {useState, useEffect} from "react";
import axios from 'axios'
import './SignUp.css'
const SignUpContainer = () => {
  const intialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    repassword: ""
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = values => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Cannot be blank";
    }
    if (!values.surname) {
      errors.surname = "Cannot be blank";
    }
    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (!values.repassword) {
      errors.password = "Cannot be blank";
    } else if (values.repassword !== values.password) {
      errors.password = "Password should be the same";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="body-container">
      <div className="container">
        <h1>Sign in</h1>
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <span className="success-msg">Form submitted successfully</span>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="status-message">
              <label htmlFor="name">Name</label>
              <div className="error-container">
                {formErrors.name && (
                  <span className="error">{formErrors.name}</span>
                )}
              </div>
            </div>

            <input
              type="name"
              name="name"
              id="name"
              value={formValues.name}
              onChange={handleChange}
              className={formErrors.name && "input-error"}
            />
          </div>
          <div className="form-row">
            <div className="status-message">
              <label htmlFor="surname">Surname</label>
              <div className="error-container">
                {formErrors.surname && (
                  <span className="error">{formErrors.surname}</span>
                )}
              </div>
            </div>

            <input
              type="surname"
              name="surname"
              id="surname"
              value={formValues.surname}
              onChange={handleChange}
              className={formErrors.surname && "input-error"}
            />
          </div>
          <div className="form-row">
            <div className="status-message">
              <label htmlFor="email">Email</label>
              <div className="error-container">
                {formErrors.email && (
                  <span className="error">{formErrors.email}</span>
                )}
              </div>
            </div>

            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              className={formErrors.email && "input-error"}
            />
          </div>

          <div className="form-row">
            <div className="status-message">
              <label htmlFor="password">Password</label>
              <div className="error-container">
                {formErrors.password && (
                  <span className="error">{formErrors.password}</span>
                )}
              </div>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              className={formErrors.password && "input-error"}
            />
          </div>
          <div className="form-row">
            <div className="status-message">
              <label htmlFor="re-password">Re-Password</label>
              <div className="error-container">
                {formErrors.repassword && (
                  <span className="error">{formErrors.repassword}</span>
                )}
              </div>
            </div>
            <input
              type="password"
              name="repassword"
              id="repassword"
              value={formValues.repassword}
              onChange={handleChange}
              className={formErrors.repassword && "input-error"}
            />
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};
export default SignUpContainer