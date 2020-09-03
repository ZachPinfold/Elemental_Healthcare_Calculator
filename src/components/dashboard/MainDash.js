import React from "react";
import LeftDash from "./LeftDash";
import RightDash from "./RightDash";

export default function MainDash() {
  return (
    <div className='main-dashboard-container'>
      <LeftDash />
      <RightDash />
    </div>
  );
}
