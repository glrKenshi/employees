import {Component} from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/srearch-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component { 
    constructor(props) { 
        super(props)

        this.state = {  
            data : [
                {name: 'Misha G.', salary: 2000, increase: false, rise: false, id: 1},
                {name: 'Andrew I.', salary: 1500, increase: false, rise: false, id: 2},
                {name: 'Nikita S.', salary: 800, increase: false, rise: false, id: 3},
            ],

            filter : 'all',

            term : ''
        }

        this.maxId = this.state.data.length + 1
    }

    onAddEmployees = (name, salary) => {   
        const newItem = {   
            name,
            salary,
            id: this.maxId++
        }

        if (newItem.name.length > 0 && newItem.salary.length > 0) { 
            this.setState(({data}) => ({    
                data : [...data, newItem]
            }))
        }
    }

    onToggleProp = (id, prop) => {  
        this.setState(({data}) => ({    
            data: data.map(item => {   
                if (item.id === id) {   
                    item[prop] = !item[prop]
                }

                return item
            })
        }))
    }

    onDelete = (id) => {    
        this.setState(({data}) => ({    
            data: data.filter(elem => elem.id !== id)
        }))
    }

    SearchByInput = (items, term) => {    
        if (term.toLowerCase().length === 0) {   
            return items
        }

        return items.filter(item => {   
            return item.name.toLowerCase().indexOf(term) > -1
        })
    }

    onChangeTerm = (term) => {
        this.setState({term: term})
    }

    SearchByFilter = (data, filter) => {    
        switch (filter) {   
            case 'rise' : 
                return data.filter(elem => elem.rise)
            case 'moreThan1000' : 
                return data.filter(elem => elem.salary > 1000)
            default : 
                return data
        }
    }

    onChangeFilter = (filter) => {  
        this.setState({filter})
    }

    render() {  
        const {data, term, filter} = this.state

        const employeesAmt = data.length 
        const increaseAmt = data.filter(elem => elem.increase).length

        const visibleData = this.SearchByFilter(this.SearchByInput(data, term), filter)

        return (    
            <div className="app">
                <AppInfo employeesAmt={employeesAmt} increaseAmt={increaseAmt} />
    
                <div className="search-panel">
                    <SearchPanel onChangeTerm={this.onChangeTerm} />
                    <AppFilter onChangeFilter={this.onChangeFilter} 
                        filter={this.state.filter}/>
                </div>
    
                <EmployeesList 
                    onDelete={this.onDelete}
                    onToggleProp={this.onToggleProp} 
                    data={visibleData} />
                <EmployeesAddForm onAddEmployees={this.onAddEmployees} />
            </div>
        )
    }
}

export default App