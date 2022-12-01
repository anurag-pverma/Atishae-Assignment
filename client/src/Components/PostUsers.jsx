import React, { useState } from 'react'
import { useEffect } from 'react';

function PostUsers() {
    const [data, setData] = useState([])
    const [user, setUser] = useState({
        name:"",
        age:"",
        username:""
    })


    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user, [name]:value})

    }


    const handleSubmit = (e)=>{
        fetch ("http://localhost:3001/createUser",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",},

        body: JSON.stringify(user)
        })
    }

    const fetchData = async()=>{
        fetch("http://localhost:3001/getUsers").then((response)=>{
            return response.json();
        }).then((data)=>{
            setData(data)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(data)
  return (
    <div>


       <div>
       <input type="text" name='name' onChange={handleChange}  /> <br />
        <input type="number" name='age' onChange={handleChange} /> <br />
        <input type="text" name='username' onChange={handleChange} /><br />
        <input type="submit"  value="submit" onClick={handleSubmit}/>

       </div>

       <div>
        {data.length && data.map((el)=>(
            <div key={el.id}>

                <p>{el.name}</p>
                <p>{el.age}</p>
                <p>{el.username}</p>
            </div>
        ))}
       </div>

    </div>
  )
}

export default PostUsers