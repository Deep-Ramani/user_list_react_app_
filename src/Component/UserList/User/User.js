import React from "react";
import { Avatar } from "../../Avatar/Avatar";
import { Email } from "../../Email/Email";
import { Name } from "../../Name/Name";
import "./User.css";
import { Status } from "./Status/Status";
import { Access } from "./Access/Access";
import { LockAndDeleteBtn } from "./LockAndDeleteButton/LockAndDeleteBtn";
import { useDispatch } from "react-redux";
import { userHover } from "../../../redux/actions/action";
import { DeleteUser } from "../../../redux/actions/action";

export const User = (props) => {
  const Dispatch = useDispatch();

  return (
    <tr>
      <td
        className="userData"
        onMouseEnter={() => Dispatch(userHover(props.index))}
      >
        <div className="UserInformation">
          <div className="userAvatar">
            {/* <img src={props.user.Image} alt="not display"></img> */}
            <Avatar avatar={props.user.Image} />
          </div>
          <div className="UserNameAndEmail">
            <div className="name">
              <Name name={props.user.Name} />
            </div>
            <div className="email">
              <Email email={props.user.Email} />
            </div>
          </div>
        </div>
      </td>
      <td className="status">
        <Status status={props.user.Status} />
      </td>
      <td className="access">
        <Access access={props.user.Access} />
      </td>
      <td className="lockandDeletebtn">
        <LockAndDeleteBtn user={props.user} onClick={()=>Dispatch(DeleteUser(props.index))} />
      </td>
      
    </tr>
  );
};
