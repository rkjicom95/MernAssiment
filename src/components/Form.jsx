
import React, { useState } from "react";
import "../App.css"

const htmlForm = () => {
  const [userData, setUserData] = useState({
    fname:"",
    lname:"",
    email:"",
    mobileNo:"",
    project:""
  })

  const handleChange =(e)=>{
    const {name, value} = e.target
    setUserData((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }


    const handleSubmit = (event) =>{
        event.preventDefault();
        localStorage.setItem('userData',JSON.stringify(userData))
        console.log(userData);
    }

  return (
    <>
      <div className="htmlForm">
        <h2 className="clients">Create Client</h2>
        <htmlForm>
          <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
               Name
          </label><br />
            <input
            value={userData.fname}
            onChange={handleChange}
            name="fname"
              type="text"
              className="htmlForm-control input"
              id="exampleInputName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLastName" className="htmlForm-label">
              Last Name
            </label><br />
            <input
              value={userData.lname}
              onChange={handleChange}
              name="lname"
              type="text"
              className="htmlForm-control input"
              id="exampleInputLastName"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">
              Email
            </label><br />
            <input
            value={userData.email}
            onChange={handleChange}
              name="email"
              type="email"
              className="htmlForm-control input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">
              Mobile No
            </label>
            <br />
            <input
            value={userData.mobileNo}
            onChange={handleChange}
              name="mobileNo"
              type="number"
              className="htmlForm-control input"
              id="exampleInputMobileNo"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputProject" className="htmlForm-label">
              Project
            </label><br />
            <input
            value={userData.project}
            onChange={handleChange}
              name="project"
              type="project"
              className="htmlForm-control input"
              id="exampleInputProject"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="button" onClick={handleSubmit} className="btn btn-primary">
            Create Client
          </button>
        </htmlForm>
      </div>
    </>
  );
};

export default htmlForm;
