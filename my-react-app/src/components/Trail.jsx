import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Trail() {
  const [mydata, setMydata] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios.get(URL)
    .then((res)=>{
        mydata(res)
    }).catch((err)=>{
        console.log("err",err)
    })
  }, []);

  return (
    <div>
      <h2>Displaying Data</h2>
      <div>
        {mydata.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trail;
