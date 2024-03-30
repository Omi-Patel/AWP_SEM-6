const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h1>Hello From Home Route.</h1>");
});
app.get("/set-cookie", (req, res) => {
  res.cookie("session_id", "Example Of Cookie value : 123", {
    httpOnly: true,
    maxAge: 3600000,
  });
  res.send("<h1>Session cookie set</h1>");
});
app.get("/read-cookie", (req, res) => {
  const sessionId = req.cookies.session_id;

  if (sessionId) {
    res.send("<h1>Session cookie value: </h1>" + sessionId);
  } else {
    res.send("Session cookie not set");
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
