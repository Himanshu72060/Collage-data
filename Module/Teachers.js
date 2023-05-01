// Require schema
const schema = require("../Schema/TeachersData")

// Students data api
module.exports = async (req, res) => {

    // Use try catch
    try {

        const teacherdata = await new schema({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Expirence: req.body.Expirence,
            Qualifications: req.body.Qualifications
        });

        // Data save in database
        const teacherdataSave = teacherdata.save();
        console.log(teacherdataSave, "teacherdataSave");

        // Return success response
        return res.status(200).json({
            message: "Data saved succesfully",
            data: teacherdataSave
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}