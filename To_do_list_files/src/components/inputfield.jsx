import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export function Inputfield() {
  return (
    <div
      style={{ width: "80vw", paddingLeft: "10vw" }}
      className="positon-relative d-flex justify-content-center"
    >
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter the Task"
          aria-label="Enter the Task"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Create
        </button>
      </div>
    </div>
  );
}
