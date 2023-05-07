import React, { useState } from "react";

function Box() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return (
    <div
      style={{ width: "50vh", height: "40vh" }}
      className="no_change rounded border border-2 position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded"
    >
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={(x) => {
            setEmail(x.target.value);
          }}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(x) => {
            setPassword(x.target.value);
          }}
        />
        <label htmlFor="floatingPassword">Password</label>
        <div
          className="position-absolute top-95 start-50 translate-middle-x"
          style={{ paddingBottom: "2vh", paddingTop: "2vh" }}
        >
          <input
            type="checkbox"
            name="Remember_me"
            id="btncheck2"
            className="btn-check"
            autoComplete="off"
          />
          <label htmlFor="btncheck2" className="btn btn-outline-primary">
            Remember me
          </label>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-primary position-absolute top-90 end-100"
            onClick={() => {}}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary position-absolute top-90 start-100"
            onClick={() => {
              setEmail("");
              setPassword("");
            }}
          >
            Reset
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Box;
