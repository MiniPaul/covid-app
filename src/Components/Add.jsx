import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'


const Add = () => {

    const[input,setinput]=new useState(
        [
            {
                "name":"",
                "phno":"",
                "address":"",
                "symptoms":"",
                "status":""
            }
        ]
    )

    const inputHandler=(event)=>{
        setinput({...input,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
      console.log(input)
      axios.post("http://localhost:3001/api/covid/add",input).then(
          (response)=>{
              console.log(response.data)
              if (response.data.status=="success") {
                  alert("Successfully added")
                  setinput(
                    {
                        "name":"",
                        "phno":"",
                        "address":"",
                        "symptoms":"",
                        "status":""
                    }
                  )
              } else {
                  alert("Something went wrong")
              }
          }
      )
    }

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phno </label>
                            <input type="text" className="form-control" name="phno" value={input.phno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control"name="address" value={input.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Symptoms</label>
                            <input type="text" className="form-control" name="symptoms" value={input.symptoms} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Status</label>
                            <input type="text" className="form-control" name="status" value={input.status} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add