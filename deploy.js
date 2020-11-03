const nodeshift = require('nodeshift');

nodeshift.deploy({
  deploy: {
    port: 3000
  }
})
  .then((response) => {
    console.log(response);
    console.log('Application Deployed')
  })
  .catch((err) => {
    console.err(err);
  });
