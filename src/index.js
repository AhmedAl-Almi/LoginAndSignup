const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('the server running in posrt 3000...');
})
