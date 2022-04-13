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
      <select className="status-item" onClick={props.toggleStatus}>
        {/* <option value="volvo">Active</option>
        <option value="saab">Inactive</option> */}
       <option value="Inactive"> Inactive</option>
       <option value="Active"> Active</option>
      </select>
    </div>
  );
};
