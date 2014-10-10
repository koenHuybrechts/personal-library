module.exports = {
  me: function(req, res) {
    res.send(req.user);
  }
};