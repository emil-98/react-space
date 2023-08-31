import express from "express";
import axios from "axios";
import {config} from "dotenv";
config();

console.log({test: process.env["TESTING123"]})

//secrets
const NASA_KEY = process.env.NASA_KEY;

//config
const PORT = process.env.PORT;
const NASA_URL = process.env.NASA_URL;

export const app = express();

let apodObj = {
  copyright: String,
  date: String,
  explanation: String,
  hdurl: String,
  media_type: String,
  service_version: String,
  title: String,
  url: String
}

app.get("/api", (req, res) => {
  axios.get(`${NASA_URL}${NASA_KEY}`)
    .then(nasaRes => {
      apodObj = nasaRes.data;
      res.json(apodObj);
    })
});

// This also helps vite do its job. Checks if VITE value in .env is true, if not then the app listens on env's PORT value
if(!process.env['VITE']){
  const frontendFiles = process.cwd() + '/dist'
  app.use(express.static(frontendFiles))
  app.get('/*', (_, res) => {
    res.send(frontendFiles + '/index.html')
  })
  app.listen(process.env['PORT'])
}