export const userHover = (index) => {
  return {
    type: "onMouseEnter",
    payload: index
  };
};
export const DeleteUser = (index) => {
  console.log(index);
  return{
    type:"DeleteUser",
    payload :index,
  };
};

export const UpdateStatus = (index) =>{
  return {
    type:"UpdateStatus",
    payload:index,
  }
}

export const setUsers = (users) => {
  return {
      type : "SetUsers",
      payload : users,
  };
};
