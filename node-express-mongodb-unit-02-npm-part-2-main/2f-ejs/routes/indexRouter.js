/*
    Import express and create a router variable
*/
const express = require("express");
const router = express.Router();

/*
    Teacher Data
*/
const teachersArr = [
    {
        name: "Jerron Smith",
        origin: "Unknown",
        age: "Unknown",
        leadingClass: false,
    },
    {
        name: "Colin Jaffe",
        origin: "Cloned in a facility on planet Kamino",
        age: 30,
        leadingClass: true,
    },
];
/*
    Set up a response to localhost:3000/
*/
router.get("/", (req, res) => {
    res.render("home", {name: 'James Bond', isLoggedIn: true});
});

/*
    Set up a response to localhost:3000/teachers
*/

router.get('/teachers', (_, res) => {
    res.render('teachers', {
        teachers: teachersArr,
        name: 'Spongebob',
        isLoggedIn: true,
    })
})

/*
    Export this router
*/
module.exports = router;
