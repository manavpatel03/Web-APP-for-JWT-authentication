import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export function Titlebar() {
  return (
    <div className="positon-relative">
      <nav class="navbar bg-dark text-white position-absolute start-0 top-0">
        <div
          class="container-fluid bg-dark text-white"
          style={{ width: "100vw", height: "15vh" }}
        >
          <div className="position-absolute end-75 top-40 fs-2">
            Welcome to Task Manager
          </div>
          <button
            type="button"
            class="position-absolute btn btn-outline-light start-50 top-40"
          >
            Reset
          </button>
        </div>
      </nav>
    </div>
  );
}
