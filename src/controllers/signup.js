exports.get = ('/signup', (req, res) => {
  res.render('signup', {
    css: 'css/style',
    js: 'js/signup',
  });
});

exports.post = ('/signup', (req, res) => {
  const result = req.body;
  console.log('result', result);
});
