const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('secret'));
app.set('view engine', 'ejs');
app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.json(req.headers);
});

app.get('/lonely-doge', (req, res) => {
  const visit = parseInt(req.signedCookies['v']) + 1 || 1;
  res.cookie('v', visit, { signed: true, httpOnly: true, secure: true, sameSite: 'strict' });
  res.render('lonely-doge', { visit });
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));