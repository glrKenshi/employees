import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const employees = data.map(item => {   
        const {id, ...items} = item
        
        return (    
            <EmployeesListItem 
                key={id} 
                {...items}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
        )
    }) 

    console.log(employees)

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    )
}

export default EmployeesList;
