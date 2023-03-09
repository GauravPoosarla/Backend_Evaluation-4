const axios = require("axios");

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "missing auth token" });
  }
  try {
    const headers = {
      authorization: token,
    };
    const result = await axios.post(
      "http://localhost:8000/validate",
      {},
      { headers: headers }
    );
    if (!result) {
      return res.status(401).json({ message: "jwt malformed" });
    }
    next();
  } catch (err) {
    res.status(401).json({ message: err });
  }
};
module.exports = { validateJWT };
