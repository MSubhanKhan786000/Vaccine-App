const { required } = require('@hapi/joi');
var express = require('express');
var router = express.Router();

var { Profile, validate } = require("../../model/UserProfile");

// add a new record  
router.post("/", async (req, res)=>{
    let { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let profile = new Profile();

    profile.name = req.body.name;
    profile.gender = req.body.gender;
    profile.age = req.body.age;
    profile.cnic = req.body.cnic;
    profile.country = req.body.country;
    profile.phoneno = req.body.phoneno;
    profile.medical = req.body.medical;
    profile.allergies = req.body.allergies;

    await profile.save();
    return res.send(profile);
});

// all record from db in api format
router.get("/",  async (req,res)=>{
// router.get("/", auth , admin ,  async (req,res)=>{
    // console.log("this")
    // console.log(req.user); // avalible user data here without fetch using token/middleware
    let profile = await Profile.find();
    return res.send(profile);
});



// update record 
router.put("/:id", async (req, res)=>{
    let profile = await Profile.findById(req.params.id);

    profile.name = req.body.name;
    profile.gender = req.body.gender;
    profile.age = req.body.age;
    profile.cnic = req.body.cnic;
    profile.country = req.body.country;
    profile.phoneno = req.body.phoneno;
    profile.medical = req.body.medical;
    profile.allergies = req.body.allergies;

    await profile.save();
    return res.send(profile);
});


router.delete("/:id",  async (req, res)=>{
    let profile = await Profile.findByIdAndDelete(req.params.id);
    return res.send(profile);
});



module.exports = router;