require('newrelic')
const app = require('./serverApp');

app.listen(3002, () => console.log('Listening on port 3002...'));
