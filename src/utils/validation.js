import validator from "validator"
export const validateSignUpData = (req, res)=>{
    const {firstName, lastName, emailId, password, age, gender} = req.body

    if(!firstName || !lastName || !emailId || !password || !age || !gender ){
        throw new Error("All fields are mandatory")
    }

    if(validator.isEmpty(firstName || lastName)){
        throw new Error("firstName can't be empty")
    }

    if(!validator.isEmail(emailId)){
        throw new Error("enter a valid email id")
    }

    if(!validator.isStrongPassword(password)){
        throw new Error("Enter a strong password")
    }
}