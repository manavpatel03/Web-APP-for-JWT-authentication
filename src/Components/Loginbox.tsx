import React, { useEffect, useState } from "react";
import axios from "axios";

function Box() {
  let [ans, setAns] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [check, setCheck] = useState(0);
  let [key, setKey] = useState(true);
  let [inf, setInf] = useState("");
  let [refresh, setRefresh] = useState("");
  let [know, setKnow] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("refresh") != null) {
      const refr = localStorage.getItem("refresh") ?? "";
      const form_Data = new URLSearchParams();
      form_Data.append("refresh", refr);
      async function post(
        url = "http://cms.mapit.ai/auth-api/auth/refresh/",
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
          .then((response) => {
            return response.text();
          })
          .then((result) => {
            if (result.startsWith('{"access"')) {
              setKey(false);
              setInf(localStorage.getItem("username") ?? "");
              setEmail(localStorage.getItem("email") ?? "");
            }
          })
          .catch((error) => alert("error" + error));
      }
      post("http://cms.mapit.ai/auth-api/auth/refresh/", form_Data);
    }
  }, []);

  return (
    <>
      <div
        style={{
          width: "50vh",
          height: "40vh",
          display: key ? "block" : "none",
        }}
        className="no_change rounded border border-2 position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded anim"
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
            <div className="form-check">
              <input
                type="checkbox"
                name="Remember_me"
                id="defaultcheck1"
                className="form-check-input"
                autoComplete="off"
                onChange={() => {
                  if ((know = true)) setKnow(false);
                  else setKnow(true);
                }}
              />
              <label htmlFor="defaultcheck1" className="form-check-label">
                Remember me
              </label>
            </div>
            <br />
            <br />
            <button
              type="button"
              className="btn btn-primary position-absolute top-90 end-100"
              onClick={() => {
                let formData = new URLSearchParams();
                formData.append("email", email);
                formData.append("password", password);

                // Example POST method implementation:
                async function postData(
                  url = "http://cms.mapit.ai/auth-api/auth/login/",
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
                    .then((response) => {
                      return response.text();
                    })
                    .then((result) => {
                      setAns(result);
                      if (result.startsWith('{"refresh')) {
                        if (know) {
                          localStorage.setItem(
                            "username",
                            JSON.parse(result).user.username
                          );
                          localStorage.setItem("email", email);
                          localStorage.setItem(
                            "refresh",
                            JSON.parse(result).refresh
                          );
                          localStorage.setItem(
                            "access",
                            JSON.parse(result).access
                          );
                        }
                        // window.location.href = "index_info.html";
                        // setInf(JSON.parse(ans));
                        setInf(JSON.parse(result).user.username);
                        // console.log(result);

                        setKey(false);
                        // alert(result);
                      } else {
                        alert("Please try again with correct information");
                      }
                    })
                    .catch((error) => alert("error" + error));
                }
                postData("http://cms.mapit.ai/auth-api/auth/login/", formData);
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
              }}
            >
              Reset
            </button>
            <br />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "70vw",
          height: "70vh",
          display: key ? "none" : "block",
        }}
        className="special text-center no_change rounded border border-2 position-absolute bottom-0 start-50 translate-middle-x shadow p-3 mb-5 bg-body-tertiary rounded anim"
      >
        <p className="fs-1" style={{ paddingTop: "20vh" }}>
          Hello there {inf} !!!!
          <br />
          your email : {" " + email}
          <br />
          Thank you!!!!!
        </p>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => {
            localStorage.removeItem("refresh");
          }}
        >
          Log out
        </button>
      </div>
    </>
  );
}

export default Box;
