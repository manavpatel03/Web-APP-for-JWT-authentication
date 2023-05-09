import React, { useState } from "react";
import axios from "axios";

function Box() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  return (
    <div
      style={{ width: "50vh", height: "50vh" }}
      className="no_change rounded border border-2 position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded anim"
    >
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={name}
          onChange={(x) => {
            setName(x.target.value);
          }}
        />
        <label htmlFor="floatingInput">Username</label>
      </div>
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
          <br />
          <br />
          <button
            type="button"
            className="btn btn-primary position-absolute top-90 end-100"
            onClick={() => {
              const formData = new URLSearchParams();
              formData.append("username", name);
              formData.append("email", email);
              formData.append("password", password);

              // Example POST method implementation:
              async function postData(
                url = "http://cms.mapit.ai/auth-api/auth/register/",
                formData: FormData
              ) {
                // Default options are marked with *
                await fetch(url, {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", // manual, *follow, error
                  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                  body: formData, // body data type must match "Content-Type" header
                })
                  .then((response) => response.text())
                  .then((result) => {
                    if (result.startsWith('{"user"')) {
                      alert("Successful Login!!!! \n  Now log in!!!!");

                      window.location.href = "index.html";
                    } else {
                      alert(
                        "Incorrect!!! \n possible reasons : \n password length < 8 \n improper email \n existing user"
                      );
                    }
                  })
                  .catch((error) => alert("error" + error));
              }
              postData("http://cms.mapit.ai/auth-api/auth/register/", formData);
            }}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary position-absolute top-90 start-100"
            onClick={() => {
              setEmail("");
              setPassword("");
              setName("");
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
