import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UseEffect() {
  const [myData, setMyData] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 1. Fetching data from a public API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setMyData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  // 2. Subscribing to external events (mouse movement)
  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
      console.log('Mouse Position:', event.clientX, event.clientY);
    }

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 3. Updating the document title
  useEffect(() => {
    document.title = `Fetched ${myData.length} Posts`;
  }, [myData]); // Updates the title when myData changes

  return (
    <>
      <h1>Showing Data</h1>
      <div>
        {myData.length > 0 ? (
          <ul>
            {myData.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <p>Mouse Position: X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </>
  );
}

export default UseEffect;
