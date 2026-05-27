const express = require('express');
const cors = require('cors');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const app = express();
app.use(cors());
const portName = 'COM3'; 
const serialPort = new SerialPort({ path: portName, baudRate: 9600 });
const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));
let latestData = {
  rainStatus: "Unknown",
  distance: "No Echo",
  risk: "SAFE"
};
parser.on('data', (data) => {
  console.log('Arduino says:', data);
  try {
    if (data.includes("Rain:") && data.includes("Distance:") && data.includes("Risk:")) {
      const parts = data.split('|');  
      const rainPart = parts[0].replace("Rain:", "").trim();       
      const distancePart = parts[1].replace("Distance:", "").trim(); 
      const riskPart = parts[2].replace("Risk:", "").trim();         
      let numericDistance = distancePart;
      if (distancePart.includes("cm")) {
        numericDistance = parseFloat(distancePart.replace("cm", "").trim());
      }
      latestData = {
        rainStatus: rainPart,
        distance: numericDistance, 
        risk: riskPart};}} catch (err) {
    console.error("Parsing error:", err);}});
app.get('/api/flood-data', (req, res) => {
  res.json(latestData);});
app.listen(3000, () => {
  console.log('Backend server running on http://localhost:3000');});