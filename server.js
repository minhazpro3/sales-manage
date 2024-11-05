const { default: mongoose } = require("mongoose");
const app = require("./api/app");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("mongodb not connected");
  });

//   start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
