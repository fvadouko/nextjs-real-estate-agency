import React, { Component, useState } from "react";
import { MDBBtn, MDBCollapse, MDBIcon } from "mdbreact";

const Collapse = ({ title, children }) => {
  const [collapseID, setCollapseID] = useState("");
  const styles = {
    collapse: {
      backgroundColor: "#e0e0e0",
      padding: 10,
      fontSize: 20,
    },
    icon: {
      padding: 10,
    },
  };

  const toggleCollapse = (collapseID) => () => {
    setCollapseID(
      (prevState) => (collapseID = prevState !== collapseID ? collapseID : "")
    );
  };

  return (
    <>
      <div className="mb-4">
        <div style={styles.collapse} onClick={toggleCollapse("basicCollapse")}>
          {title}
          {collapseID && (
            <MDBIcon
              icon="angle-down"
              style={styles.icon}
              className="float-right"
            />
          )}
          {!collapseID && (
            <MDBIcon
              icon="angle-up"
              style={styles.icon}
              className="float-right"
            />
          )}
        </div>
        <MDBCollapse id="basicCollapse" isOpen={collapseID}>
          {children}
        </MDBCollapse>
      </div>
    </>
  );
};

export default Collapse;
