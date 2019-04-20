exports.get = ('/', (req, res) => {
  res.render('home', {
    css: 'css/style.css',
  });
});
