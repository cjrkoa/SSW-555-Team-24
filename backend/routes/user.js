const express = require("express");
const router = express.Router();

const passport = require("passport");

router.post(
    "/login",
    function(req, res, next) {
        console.log("login response: ");
        console.log(req.body);
        next();
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("Logged In", req.user);
        let userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

module.exports = router;