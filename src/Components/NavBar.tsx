import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

// export let [y, setY] = useState(0);
export function NavBar() {
  let [x, setx] = useState(-1);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg no_change"
        style={{ width: "100wh" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Navigation Panel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={x == 1 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    setx(1);
                  }}
                  aria-current="page"
                  href="index_signup.html"
                >
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={x == 0 ? "nav-link active" : "nav-link"}
                  href="index.html"
                  onClick={() => {
                    setx(0);
                  }}
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
