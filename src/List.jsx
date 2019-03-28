import React from "react";
import PropTypes from "prop-types";

const List = ({ doctors, handleClick }) => {
  return (
    <div className="left">
      <div className="logo">
        <img src="images/notable-logo.svg" />
      </div>

      <div className="list">
        <table className="list-content">
          <tr>
            <th>
              <span className="title">PHYSICIANS</span>
            </th>
          </tr>
            {doctors.map(doctor => {
              return (
                <tr>
                  <td
                    // className="list-item"
                    onClick={() => handleClick(doctor.id)}
                  >
                    {doctor.lastName}, {doctor.firstName}
                  </td>
                </tr>
              );
            })}
        </table>
      </div>

      <div>
        <div className="log-out">LOG OUT</div>
      </div>
    </div>
  );
};

export default List;
