// const axios = require('axios')
const { default: axios } = require('axios');
const express = require('express');
const app = express();
const port = 8000;
// app.use(express.json)
// Define a simple route
app.get('/', (req, res) => {
    response = 
    res.send('Hello World!');
});
const key = '0c4fe347ecfe4b718ab43614240607';
const base_url = 'http://api.weatherapi.com/v1';
async function fetchData () {
  try {
  const queryResponse = await axios.get('http://api.weatherapi.com/v1//current.json', {
      params: {key: key, q:'New York'}
    })
  return (queryResponse.data)
  } catch(error){
      console.log(error)
    };
  }
app.get('/api/hello', async (req, res) => {
    const visitor_name = req.query?.visitor_name;
    const data = await fetchData();
    const temp = data?.current?.temp_c;
    console.log(temp)
    const response = {"client_ip": req.ip, "location": "New York", "greeting": `Hello, ${visitor_name}, the temperature is ${temp} degrees Celcius in New York`}
    res.send(response);
});


// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});