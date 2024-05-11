import {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
import { AiTwotoneEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";


const ListEmployeeComponent = () => {

    const [ employees, setEmployees ] = useState([])
    const navigator = useNavigate();
    
    useEffect( () => {
        getAllEmployees();
    }, [])
    
    function getAllEmployees(){  
        listEmployees().then((response)=>{
            setEmployees(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then(() => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }
    
  return (
    <div className='container'> 
        <h2 className='text-center'>
            List of employees
        </h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}> Add Employee </button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                   <th className="">Employee ID</th>
                   <th className="">Employee First Name </th>
                   <th className="">Employee Last Name</th>
                   <th className="">Employee Email</th>
                   <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map( employee =>
                        <tr key={employee.id}>
                            <td className="">{employee.id}</td>
                            <td className="">{employee.firstName}</td>
                            <td className="">{employee.lastName}</td>
                            <td className="">{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>
                                <AiTwotoneEdit />
                                </button>
                                <button className='btn btn-danger mr-5' onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}>
                                <AiTwotoneDelete />
                                </button>
                            </td>
                          
                        </tr>
                     ) 
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent