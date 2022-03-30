import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardHover } from "../../CardHover/CardHover";
import { User } from "../User/User";
import "./UserTable.css";
import { FetchUser } from "../../../redux/actions/action";
import Pagination from "../../Pagination/Pagination";
// import { setUsers } from "../../../redux/actions/action";

const UserTable = (props) => {
  const { users, loading, error, pageUpdated_data } = useSelector(
    (state) => state
  );
  const Dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Dispatch(FetchUser(currentPage, pageUpdated_data));
    console.log("current page: ",currentPage);
  }, [currentPage, pageUpdated_data, Dispatch]);
  console.log("users: ", users);

  const paginate = (pageNumber) => {
    const current = pageNumber;
    setCurrentPage(current);
  };

  // const fetchuser = async () => {
  //   const response = await axios
  //     .get("https://reqres.in/api/users?page=1")
  //     .catch((err) => {
  //       console.log("Err", err);
  //     });
  //   const fetchedUserList = response.data.data;
  //   let updatedUserList = [];
  //   fetchedUserList.forEach((user,index) => {
  //     let { first_name, last_name, email, avatar } = user;
  //     let updatedUser = {
  //       Name: first_name + " " + last_name,
  //       Email: email,
  //       Image: avatar,
  //       Status: `${(index === 0) ? "Active" : "Inactive"}`,
  //       Access: `${(index === 0) ? "Owner" : "Manager"}`,
  //       ClicksReviewed : "6,450",
  //       MonthlyClicks : "7,000",
  //     };
  //     updatedUserList.push(updatedUser);
  //   });
  //   Dispatch(setUsers(updatedUserList));
  // };

  // useEffect(() => {
  //   fetchuser();
  // }, []);

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
              {loading && !error ? (
                // <h2>loading...</h2>
                <tr>
                  <td colSpan="3" className="loader">
                    <div className="snippet" data-title=".dot-spin">
                      <div className="stage">
                        <div className="dot-spin"></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <h2>{error}</h2>
              ) : (
                users.map((user, index) => (
                  <User key={index} user={user} index={index} />
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="col-4">
          <CardHover />
        </div>
      </div>

      <div>
        <Pagination paginate={paginate} currentPage={currentPage} />
      </div>
    </>
  );
};

export default UserTable;
