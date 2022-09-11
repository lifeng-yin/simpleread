const jwt = require("jsonwebtoken");

function generateJWT(
  payload,
  options = { expiresIn: 15 * 60 * 1000 },
  secret = process.env.JWT_SECRET
) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });
}

function verifyJWT(
  req,
  res,
  next,
  tokenParam = undefined,
  secret = process.env.JWT_SECRET
) {
  //get the token (and remove the "Bearer: " part)
  const token = tokenParam || req.headers["x-access-token"]?.split(" ")[1];

  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err)
        return res.json({
          isLoggedIn: false,
          message: "Failed to authenticate",
        });
      req.user = {};
      req.user.id = decoded.id;
      req.user.username = decoded.username;
      next();
    });
  } else {
    res.json({ message: "Incorrect token given", isLoggedIn: false });
  }
}

module.exports = { generateJWT, verifyJWT };
