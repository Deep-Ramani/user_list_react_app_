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