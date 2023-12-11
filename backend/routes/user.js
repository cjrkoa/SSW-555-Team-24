const { router } = require("../server");

const passport = require("passport");

router.post(
    "/login",
    function(req, res, next) {
        console.log(req.body);
        next();
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("Logged In", req.user);
        let userInfo = {
            userName: req.user.username
        };
        res.send(userInfo);
    }
)

module.exports = router;