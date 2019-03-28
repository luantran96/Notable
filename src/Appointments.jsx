import React from "react";

const Appointments = ({ chosenDoctor, appointments }) => {
  return (
    <div className="appointments">
      {
        <div className="doctor-info">
          <div>
            <span id="doctor-name">
              Dr. {chosenDoctor.firstName || ''} {chosenDoctor.lastName || ''}
            </span>
          </div>
          <div>
            {chosenDoctor.email}
          </div>
        </div>
      }

      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Time</th>
          <th>Kind</th>
        </tr>

        {appointments.map(apt => {
          return (
            <tr>
              <td>{apt.id}</td>
              <td>
                {apt.firstName} {apt.lastName}
              </td>
              <td>{apt.time}</td>
              <td>{apt.kind}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Appointments;
