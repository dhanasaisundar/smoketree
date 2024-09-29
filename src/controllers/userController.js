const createUser = require("../database/database");

async function register(req, res, next) {
  const { username, address } = req.body;
  if (!username || !address) {
    return next({ status: 400, message: "Username and address are required." });
  }
  try {
    const userDetails = await createUser(username, address);
    res.status(200).json({
      success: true,
      status: 200,
      data: {
        userDetails,
      },
    });
  } catch (error) {
    next(error);
  }
}
/*############################################################################ */
module.exports = register;
