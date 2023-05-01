// Require schema
const schema = require("../Schema/StudentData")

// Students data api
module.exports = async (req, res) => {

    // Use try catch
    try {
        const RollNumber = await schema.find({ RollNumber: req.body.RollNumber })
        if (RollNumber.length === 0) {

            const studentdata = await new schema({
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Age: req.body.Age,
                AdmisionYear: req.body.AdmisionYear,
                CurrentYear: req.body.CurrentYear,
                Course: req.body.Course,
                RollNumber: req.body.RollNumber,
                FatherName: req.body.FatherName,
                MotherName: req.body.MotherName
            });

            // Data save in database
            const studentdataSave = studentdata.save();
            console.log(studentdataSave, "studentdataSave");

            // Return success response
            return res.status(200).json({
                message: "Data saved succesfully",
                data: studentdataSave
            })

        } else {
            return res.json({
                msg: "RollNumber alredy exists,please enter your new RollNumber"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}