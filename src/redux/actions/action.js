import axios from "axios";

export const userHover = (index) => {
  return {
    type: "onMouseEnter",
    payload: index,
  };
};
export const DeleteUser = (index) => {
  console.log(index);
  return {
    type: "DeleteUser",
    payload: index,
  };
};

export const UpdateStatus = (index) => {
  return {
    type: "UpdateStatus",
    payload: index,
  };
};

// export const setUsers = (users) => {
//   return {
//       type : "SetUsers",
//       payload : users,
//   };
// };

export const FetchUserRequest = () => {
  return {
    type: "FetchUserRequest",
  };
};

export const FetchUserSuccess = (users) => {
  return {
    type: "FetchUserSuccess",
    payload: users,
  };
};

export const FetchUserFailur = (error) => {
  return {
    type: "FetchUserFailur",
    payload: error,
  };
};

export const FetchUser = (currentPage) => {
  console.log(currentPage);
  return (dispatch) => {
    dispatch(FetchUserRequest);
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}`)
      .then((response) => {
        const users = response.data.data;
        let updatedUserList = [];
        users.forEach((user, index) => {
          let { first_name, last_name, email, avatar } = user;
          let updatedUser = {
            Name: first_name + " " + last_name,
            Email: email,
            Image: avatar,
            Status: `${index === 0 ? "Active" : "Inactive"}`,
            Access: `${index === 0 ? "Owner" : "Manager"}`,
            ClicksReviewed: "6,450",
            MonthlyClicks: "7,000",
          };
          console.log("updatedUser:", updatedUser);
          updatedUserList.push(updatedUser);
        });
        dispatch(FetchUserSuccess(updatedUserList));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(FetchUserFailur(errorMessage));
      });
  };
};
