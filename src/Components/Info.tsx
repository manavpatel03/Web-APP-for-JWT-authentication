import React, { useState } from "react";
import { ans } from "./Loginbox";
import { data } from "jquery";
function box() {
  let inf = JSON.parse(ans);
  return (
    <div
      style={{ width: "70vw", height: "70vh" }}
      className="no_change rounded border border-2 position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded anim"
    >
      <p>
        Hello there {inf.user.username} !!!!
        <br />
        your email : {inf.user.email}
        <br />
        Thank you!!!!!
      </p>
    </div>
  );
}

export default box;
