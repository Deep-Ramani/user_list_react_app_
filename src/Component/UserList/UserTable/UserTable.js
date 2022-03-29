import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CardHover } from "../../CardHover/CardHover";
import { User } from "../User/User";
import "./UserTable.css";
import { setUsers } from "../../../redux/actions/action";

const UserTable = (props) => {
  const users = useSelector((state) => state.users);
  const Dispatch = useDispatch();

  const fetchuser = async () => {
    const response = await axios
      .get("https://reqres.in/api/users?page=1")
      .catch((err) => {
        console.log("Err", err);
      });
    const fetchedUserList = response.data.data;
    let updatedUserList = [];
    fetchedUserList.forEach((user,index) => {
      let { first_name, last_name, email, avatar } = user;
      let updatedUser = {
        Name: first_name + " " + last_name,
        Email: email,
        Image: avatar,
        Status: `${(index === 0) ? "Active" : "Inactive"}`,
        Access: `${(index === 0) ? "Owner" : "Manager"}`,
        ClicksReviewed : "6,450",
        MonthlyClicks : "7,000",
      };
      updatedUserList.push(updatedUser);
    });
    Dispatch(setUsers(updatedUserList));
  };

  useEffect(() => {
    fetchuser();
  }, []);

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
              {users.map((user, index) => (
                <User key={index} user={user} index={index} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-4">
          <CardHover />
        </div>
      </div>
    </>
  );
};

export default UserTable;
