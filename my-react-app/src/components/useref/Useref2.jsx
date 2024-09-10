import React, { useRef, useState } from 'react';

function Useref2() {
  // Using useRef to reference each input field
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // State for validation feedback
  const [validation, setValidation] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input focus dynamically
  const handleFocus = (inputRef) => {
    inputRef.current.focus();
  };

  // Real-time validation function
  const validateInput = (e) => {
    const { name, value } = e.target;
    let message = '';

    switch (name) {
      case 'name':
        message = value.length >= 3 ? '' : 'Name must be at least 3 characters long.';
        break;
      case 'email':
        message = /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email format.';
        break;
      case 'password':
        message = value.length >= 6 ? '' : 'Password must be at least 6 characters long.';
        break;
      default:
        break;
    }

    setValidation((prev) => ({ ...prev, [name]: message }));
  };

  // Custom form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Getting values using useRef
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // Custom processing or validation logic
    if (!name || !email || !password) {
      alert('All fields are required!');
      return;
    }

    if (validation.name || validation.email || validation.password) {
      alert('Please correct the errors before submitting the form.');
      return;
    }

    // Perform form submission logic here
    console.log('Form submitted with data:', { name, email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            ref={nameInputRef}
            onChange={validateInput}
            onFocus={() => handleFocus(nameInputRef)}
          />
          {validation.name && <small style={{ color: 'red' }}>{validation.name}</small>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            ref={emailInputRef}
            onChange={validateInput}
            onFocus={() => handleFocus(emailInputRef)}
          />
          {validation.email && <small style={{ color: 'red' }}>{validation.email}</small>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            ref={passwordInputRef}
            onChange={validateInput}
            onFocus={() => handleFocus(passwordInputRef)}
          />
          {validation.password && <small style={{ color: 'red' }}>{validation.password}</small>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Useref2;
