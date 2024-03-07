const express = require('express');
const requestIp = require('request-ip');
const geoip = require('geoip-lite');

const app = express();

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  const ip = requestIp.getClientIp(req);
  const geo = geoip.lookup(ip);

  res.json({
    ip: ip,
    country: geo.country,
    city: geo.city,
    region: geo.region,
    timezone: geo.timezone
  });
  console.log('responsed get request...');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});