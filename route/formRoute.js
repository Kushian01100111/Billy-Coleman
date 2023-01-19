import  Express  from "express";
import formControl from "../formController/formControl.js";
const route =  Express.Router()

route.post("*", formControl)

export default route