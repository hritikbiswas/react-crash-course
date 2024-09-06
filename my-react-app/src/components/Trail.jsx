import React,{useEffect,useState} from 'react';
import axios from "axios";


function Trail() {
    const[mydata,setMydata]=useState([]);
    const URL="https://jsonplaceholder.typicode.com/photos"
    useEffect(()=>{
      async  function displayData(){
            try { 
                const res= await axios.get(URL)
                setMydata(res.data)
            } catch(err){
                console.log("err",err)
            }
        }
        displayData()
    },[])

  return (
    <div>
        <h2>fetching data</h2>
        <div>
            {mydata.map((item)=>(
                
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <div>
                            <img src={item.url} alt="" />
                        </div>
                    </div>
                
            ))}
        </div>
    </div>
  )
}

export default Trail