var express = require("express");
var mongoose = require("mongoose");
const StudentModel = require("../models/student_model")
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');

var router = express.Router();


router.use(express.json())

router.get("/", function (req, res, next) {
    res.send("student data recovered")
});

router.post("/add", (req, res) => {
    let new_student = new StudentModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        dob: req.body.dob,
        department: req.body.department
    })
    new_student.save().then(function (err) {
        if (err)
            res.send(err)
        else
            res.status(200).send({
                status: 200,
                message: "student data added successfully",
                StudentObj: new_student
            })
    })
})

router.get("/list", (req, res) => {
    StudentModel.find().then(function (response, err) {
        if (err)
            res.send(err)
        else
            res.status(200).send({ "Status": 200, "resultsFound": Array(response).length, "data": response })
    })

});

router.get("/searchByFirstname", (req, res) => {
    const search_name_query = req.query.firstName
    StudentModel.findOne({ "firstName": search_name_query }).then(function (response, err) {
        if (err)
            res.status(400).send(err)
        else
            res.status(200).send({ "Status": 200, "resultsFound": Array(response).length, "data": response })
    })

});

router.get("/searchByID", (req, res) => {
    const search_id_query = req.query.id
    StudentModel.findById(search_id_query).then(function (response, err) {
        if (err)
            res.send(err)
        else
            res.status(200).send({ "Status": 200, "resultsFound": Array(response).length, "data": response })
    })

});

router.put("/updatewithID", (req, res) => {
    const search_id_query = req.query.id
    StudentModel.findByIdAndUpdate(search_id_query, { "firstName": "john" }).then(function (response, err) {
        if (err)
            res.send(err)
        else
            res.status(200).send({ "Status": 200, "message": "Data updated successfully", "id": search_id_query })
    })

});

router.put("/updatemany", (req, res) => {
    StudentModel.updateMany({ "firstName": "darvin" }, { "lastName": "rajesh", "age": "25" }).then(function (response, err) {
        if (err)
            res.send(err)
        else
            res.status(200).send({ "Status": 200, "message": "Data updated successfully" })
    })

});

router.put("/updateone", (req, res) => {
    StudentModel.updateOne({ "firstName": "darvin" }, { "dob": "25.10.10" }).then(function (response, err) {
        if (err)
            res.send(err)
        else
            res.status(200).send({ "Status": 200, "message": "Data updated successfully" })
    })

});

router.put("/findoneandupdate", (req, res) => {
    StudentModel.findOneAndUpdate({ "firstName": "john" }, { "firstName": "darvin1" }).then(function (response, err) {
        if (err)
            res.send(err)
        else
            res.status(200).send({ "Status": 200, "message": "Data updated successfully" })
    })

});

router.delete("/deleteUser", (req, res) => {
    StudentModel.deleteOne({ "firstName": "John1" }).then(function (response, err) {
        if (err)
            res.send(err)
        else
            res.status(200).send({ "Status": 200, "message": "Data removed successfully" })
    })

});


router.delete("/deleteUserMany", (req, res) => {
    StudentModel.deleteMany({ "firstName": "darvin1" }).then(function (response, err) {
        if (err)
            res.send(err)
        else
            res.status(200).send({ "Status": 200, "message": "Data removed successfully" })
    })

});


router.get("/currenttimestamp", (req, res) => {
    console.log(req.body);
    try {
          const now = new Date().toISOString();
          return res.status(200).send({"timestamp":now.slice(0,-1)+"000+00:00"})
  }catch (error) {
        return res.status(500).json({
          error: true,
          message: "Cannot Get Data",
        });
      }
    }
)

const jsonData = [
    {"name": "John", "age": 30, "city": "New York"},
    {"name": "Alice", "age": 25, "city": "Los Angeles"},
    {"name": "Bob", "age": 35, "city": "Chicago"}
];

router.get("/export", (req, res) => {
    const csvWriter = createObjectCsvWriter({
        path: 'output.csv',
        header: Object.keys(jsonData[0]).map(key => ({ id: key, title: key }))
    });

    csvWriter.writeRecords(jsonData)
        .then(() => {
            console.log('CSV file has been written successfully');
            res.download('output.csv');
        })
        .catch(error => {
            console.error('Error writing CSV:', error);
            res.status(500).send('Internal Server Error');
        });
});

module.exports = router;