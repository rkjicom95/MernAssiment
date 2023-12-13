
import React,{useEffect, useState} from "react";
import "../App.css";

const Clients = () => {

  const [data, setData] = useState({})
  const [deleteData, setDeleteData] = useState(false)


  const handleDelete = ()=>{
    localStorage.clear()
    setDeleteData(true)
  }

  useEffect(()=>{
    const userData =  localStorage.getItem('userData')
    const userObj = JSON.parse(userData)
    setData(userObj)
  },[deleteData])


  return (
    <>
      <div className="client">
        <h2 className="clients">Clients</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile.No</th>
              <th scope="col">Project</th>
            </tr>
          </thead>
          <tbody>
            {data!==undefined && data!==null && Object?.keys(data)?.length>0 && <>
              <tr>
              <td>{data.fname}</td>
              <td>{data.lname}</td>
              <td>{data.email}</td>
              <td>{data.mobileNo}</td>
              <td>{data.project}</td>
             <td> <button style={{borderStyle:"none",fontSize:"17px",color:"blue",fontWeight:"500",background:"none"}}>Edit</button>
              <button style={{marginLeft:"5px",borderStyle:"none",fontSize:"17px",color:"blue",fontWeight:"500",background:"none"}} onClick={handleDelete}>Delete</button></td>
            </tr>
              </>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Clients;