const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.json(req.headers);
});

app.get('/lonely-doge', (req, res) => {
  let visitCount = parseInt(req.headers.cookie?.split('=')[1]);
  console.log(visitCount)
  if (isNaN(visitCount) || visitCount < 1) {
    res.setHeader('Set-Cookie', 'v=1; httponly');
  } else {
    res.setHeader('Set-Cookie', `v=${++visitCount}; httponly`);
  }
  res.render('lonely-doge', {visitCount});
})

app.listen(3000);