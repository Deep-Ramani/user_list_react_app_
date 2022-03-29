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
    type: "FetchUserFailure",
    payload: error,
  };
};

export const StoreData = (data, pageNumber) => {
  console.log("UpdatedData", data);
  return {
    type: "StoreData",
    payload: data,
    pageNumber: pageNumber,
  };
};

export const FetchUser = (currentPage, page_data) => {
  console.log(currentPage);
  return (dispatch) => {
   
    dispatch(FetchUserRequest());
    if (page_data && page_data[currentPage]) {
      console.log("page data",page_data[currentPage])
      dispatch(FetchUserSuccess(page_data[currentPage]));
    } else {
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
          dispatch(StoreData(updatedUserList, currentPage));
        })
        .catch((error) => {
          dispatch(FetchUserFailur(error.message));
        });
    }
  };
};
