import React from "react";

export default function Mensaje(props) {
  return (
    <div>
      <div className={` alert alert-${props.variant || "info"} `}>
        {props.children}
      </div>
    </div>
  );
}
