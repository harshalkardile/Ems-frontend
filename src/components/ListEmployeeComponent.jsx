import {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'


const ListEmployeeComponent = () => {

    const [ employees, setEmployees ] = useState([])
    
    useEffect( () => {
        listEmployees().then((response)=>{
            setEmployees(response.data)
        }).catch(error => {
            console.error(error);
        })
    }, [])
    
  return (
    <div className='container'> 
        <h2 className='text-center'>
            List of employees
        </h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                   <th className="">Employee ID</th>
                   <th className="">Employee First Name </th>
                   <th className="">Employee Last Name</th>
                   <th className="">Employee Email</th>
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
                        </tr>
                     ) 
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent