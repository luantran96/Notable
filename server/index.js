const express = require('express');
const path = require('path');
const doctors = require('../mockData/doctors');
const appointments = require('../mockData/appointments');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(path.join(__dirname, '../dist/')));


// Fetch all doctors
app.get('/doctors/all', (req, res) => {
  res.json(doctors);
});

// Fetch appointments related to a doctor ID
app.get('/appointments/:doctorId', (req, res) => {

  let { doctorId } = req.params;
  let relevantAppointments = [];

  appointments.forEach(appointment => {
    if (appointment.doctorId === Number(doctorId)) {
      relevantAppointments.push(appointment);
    }
  });


  res.json(relevantAppointments);
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/app.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});