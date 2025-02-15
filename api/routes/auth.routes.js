const { validateInstituteData, handleValidation } = require("../middleware/validators/instituteValidator");
const validateLogin = require("../middleware/validators/loginValidator");

module.exports = app => {
    const authController = require("../controllers/auth.controller");
    const authMiddelware = require("../middleware/auth/auth.middleware");

    var router = require('express').Router();

    router.get("/", (req, res)=> res.send("Hiii from Backed !!!"));

    router.get("/suggestions/code", authController.getCodeSuggestions)

    router.get("/suggestions/name", authController.getNameSuggestions)

    router.get("/institute-data/:id", authController.getInstituteData)

    router.post("/register", validateInstituteData, authController.register_institute);

    router.post("/login", validateLogin ,authController.loginUser, authMiddelware.createToken);

    router.get("/getUser", authController.getUser);
    
    app.use("/api", router);
}