const authorModel = require("../Models/authorModel");
const validator = require("../Validator/Validation");
const secretKey = "this-is-my-Group7-Blog-Project";

const createAuthor = async function (req, res) {
  try {
    const data = req.body;

    if (Object.keys(data).length == 0) {
      return res
        .status(400)
        .send({ status: false, message: "All Keys are Mandatory" });
    }

    const { fname, lname, title, email, password } = data;

    if (!isValid(fname)) {
      return res
        .status(400)
        .send({ status: false, msg: "first name is required" });
    }

    if (!isValid(lname)) {
      return res
        .status(400)
        .send({ status: false, msg: "last name is required" });
    }

    if (!isValid(title)) {
      return res.status(400).send({ status: false, msg: "title is required" });
    } else {
      if (title != "Mr" && title != "Mrs" && title != "Miss") {
        return res
          .status(400)
          .send({ status: false, msg: "title can be Mr. Miss or Mrs " });
      }
    }
    if (!isValid(email)) {
      return res.status(400).send({ status: false, msg: "Email is required" });
    }

    if (!validator.isValidEmail(email)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Valid Email Address" });
    }
    const isEmailAlreadyUsed = await authorModel.findOne({ email });
    if (isEmailAlreadyUsed) {
      return res
        .status(400)
        .send({ status: false, msg: "email already registered" });
    }

    if (!isValid(password)) {
      return res
        .status(400)
        .send({ status: false, msg: "Password is required" });
    }
    const newAuthor = await authorModel.create(data);

    res.status(201).send({
      status: true,
      msg: "author created successfully",
      data: newAuthor,
    });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

//______________________ post api : Login Author ________________________________

const logInUser = async function (req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (Object.keys(data).length == 0) {
      return res
        .status(400)
        .send({ status: false, message: "All Keys are Mandatory" });
    }

    if (!isValid(email)) {
      return res.status(400).send({ status: false, msg: "Email is required" });
    }

    if (!validator.isValidEmail(email)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Valid Email Address" });
    }

    if (!isValid(password)) {
      return res
        .status(400)
        .send({ status: false, msg: "password is required" });
    }

    const author = await authorModel.findOne({ email, password });
    if (!author) {
      return res
        .status(401)
        .send({ status: false, msg: "Invalid login credentials" });
    }

    const token = jwt.sign({ authorId: author._id.toString() }, "secretKey");
    req.token=res.setHeader("x-auth-token", token);
    return res.status(200).send({ status: true, msg: token });
  } catch (err) {
    return res.status(500).send({ status: false, err: err.message });
  }
};

//__________________________ Exporting Module ___________________________________________

module.exports = { createAuthor, logInUser };
