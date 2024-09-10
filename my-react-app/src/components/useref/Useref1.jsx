import React, { useRef, useEffect } from 'react';

function Useref1() {
  // Ref for focusing input on mount
  const focusInputRef = useRef(null);

  // Ref for managing uncontrolled input
  const uncontrolledInputRef = useRef(null);

  // Ref for interacting with DOM element
  const divRef = useRef(null);

  // Automatically focus the input field when the component mounts
  useEffect(() => {
    if (focusInputRef.current) {
      focusInputRef.current.focus();
    }
  }, []);

  // Function to handle click on the div and change background color
  const handleDivClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 
        divRef.current.style.backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
    }
  };

  // Function to handle displaying the current value of uncontrolled input
  const handleInputChange = () => {
    const currentValue = uncontrolledInputRef.current.value;
    document.getElementById('display').innerText = currentValue;
  };

  return (
    <div>
      {/* 1. Focusable Input Field */}
      <h3>Focusable Input Field</h3>
      <input ref={focusInputRef} placeholder="Auto-focus input" />

      {/* 2. Uncontrolled Input Field */}
      <h3>Uncontrolled Input Field</h3>
      <input
        ref={uncontrolledInputRef}
        placeholder="Type something..."
        onChange={handleInputChange}
      />
      <p>Current Value: <span id="display"></span></p>

      {/* 3. Interacting with DOM Element */}
      <h3>Clickable Div to Change Background Color</h3>
      <div
        ref={divRef}
        onClick={handleDivClick}
        style={{
          width: '200px',
          height: '100px',
          border: '1px solid black',
          marginTop: '10px',
          textAlign: 'center',
          lineHeight: '100px',
          cursor: 'pointer'
        }}
      >
        Click me!
      </div>
    </div>
  );
}

export default Useref1;
