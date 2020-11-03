const router = require("express").Router()

router.use("/users", require("./users"))
router.use("/words", require("./words"))

module.exports = router
