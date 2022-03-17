import React from "react";
import './Status.css'
export const Status = (props) => {

  if(props.status === "Active")
  {
    return (
     <div className="ActiveColor">{props.status}</div> 
    )
  }
  return (
    <div className="dropdown">
      <select className="status-item">
        {/* <option value="volvo">Active</option>
        <option value="saab">Inactive</option> */}
       <option> Inactive</option>
       <option onClick={props.onClick}> Active</option>
      </select>
    </div>
  );
};
