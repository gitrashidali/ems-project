import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import app  from "../../config/firebase-config.js";
import { db } from "../../config/firebase-config.js";
// Get the collcetion reference from DB...
const employeeCollectionRef = collection(db, "Employees")

// Get all the employess
const getEmployess = () => {
    const employeeList = getDocs(employeeCollectionRef)
    return employeeList;
}

// this method is used to get single employee
const getEmployee = (id) => {
    const employeeDoc = doc(db, "Employees", id)
    return employeeDoc;
}

// Add employee
const addEmployee = (newEmp) => {
    return addDoc(employeeCollectionRef, newEmp)
}

// Update an Employee
const updateEmployee = async (id, employeeUpdates) => {
    try {
        const employeeDoc = doc(db, "Employees", id)
        await updateDoc(employeeDoc, employeeUpdates);
        console.log("Employee updated successfully")
    }
    catch (error) {
        console.log("Error updating employee: ", error)
    }
}

// Delete an employee
const deleteEmployee = (id) => {
    const employeeDoc = doc(db, "Employees", id)
    return deleteDoc(employeeDoc)
}

const CRUD_OP = {
    getEmployess,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}
export default CRUD_OP;