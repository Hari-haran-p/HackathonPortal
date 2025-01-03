const { validateInstituteData, handleValidation } = require("../middleware/validators/instituteValidator");

module.exports = app => {
    const authController = require("../controllers/auth.controller");
    const authMiddelware = require("../middleware/auth/auth.middleware");

    var router = require('express').Router();

    router.get("/", (req, res)=> res.send("Hiii from Backed !!!"))

    router.post("/register", validateInstituteData, authController.register_institute);

    router.post("/login", authController.loginUser, authMiddelware.createToken);

    router.get("/getUser", authController.getUser);
    
    app.use("/api", router);
}