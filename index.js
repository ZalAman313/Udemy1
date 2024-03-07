const express = require('express');

const app = express();

const PORT = process.env.PORT || 5001

app.get('/', (req, res) => {
  res.send({'message_type':'start_guidance'}); 
  console.log('responsed get request...');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.listen(PORT);
