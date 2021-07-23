require('dotenv').config();
const cors = require('cors');
const express = require('express');
port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: true, message: 'The API is working fine!' });
});
console.log(port);
app.listen(port, () => {
  console.log(`App is listening on port ${port}...`);
});

app.post('/signin', (req, res) => {
  data = req.body;
  if (data.username != 'testuser@gmail.com') {
    res.json({ status: false, message: 'That user does not exist' });
    return;
  }
  if (data.password != 'testpassword') {
    res.json({ status: false, message: 'Invalid signin details' });
    return;
  }
  res.json({ status: true, message: 'Signin successful' });
  return;
});
