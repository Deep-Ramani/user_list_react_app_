import React from 'react'

export const Access = (props) => {

    if(props.access === "Owner")
    {
        return (
            props.access
        );
    }
  return (
    <div className="dropdown">
      <select className="status-item">
        {/* <option value="volvo">Active</option>
        <option value="saab">Inactive</option> */}
       <option> Manager</option>
       <option> Read</option>
      </select>
    </div>
  )
}
