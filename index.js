var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send({ hello: 'there' });
});
var PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`I'm listening on ${PORT}!`);
});
