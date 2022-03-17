import React from "react";
import { useSelector } from "react-redux";
import { CardHover } from "../../CardHover/CardHover";
import { User } from "../User/User";
import './UserTable.css'

const UserTable = (props) => {
  const users = useSelector((state) => state.users);
  return (
    <>
    <div className="col-12">  
      <div className="col-8">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Access</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <User key={index} user={user} index={index} />
            ))}
          </tbody>
        </table>
      </div>

    <div className="col-4">
             <CardHover/>
    </div>
      </div>
    </>
  );
};

export default UserTable;
