const app = require('express')();
const bodyParser = require('body-parser');
const dice = require('roll');


const port = 3000;

app.listen(port, () => {
  console.log('we are listening on ' + port);
});