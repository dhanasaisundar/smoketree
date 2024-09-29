const express = require("express");
const router = require("./src/routes/userRouter");
const errorMiddleware = require("./src/utils/error");
const app = express();

app.use(express.json());
/* **************************************************************** */
app.use("/api", router, errorMiddleware);
app.listen(3000, () => console.log("Server listening at port 3000"));
/* **************************************************************** */
