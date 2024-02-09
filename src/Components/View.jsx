import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {

    const[data,setdata]=new useState([])
    const getdata=()=>{
       axios.get("http://localhost:3001/api/covid/viewall").then(
           (response)=>{
               setdata(response.data)
           }
       )
    }
    useState(()=>{getdata()},[])

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Ph no.</th>
      <th scope="col">address</th>
      <th scope="col">symptoms</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    
    {
        data.map(
            (value,index)=>{
                return <tr>
                <td>{value.name}</td>
                <td>{value.phno}</td>
                <td>{value.address}</td>
                <td>{value.symptoms}</td>
                <td>{value.status}</td>
              </tr>
            }
        )
    }

  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View