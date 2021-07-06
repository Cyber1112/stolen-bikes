import React, {useState} from 'react'
import "../Registration/SignUp.css"
const SignInMenu = () => {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});

  //input change handler
  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  //form validation handler
  const validate = values => {
    let errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    }
    return errors;
  };

  return (
    <div className="body-container">
      <div className="container">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit} noValidate>
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
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
export default SignInMenu