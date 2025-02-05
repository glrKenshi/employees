import {Component} from 'react'

import './search-panel.css'

class SearchPanel extends Component { 
    constructor(props) {    
        super(props)

        this.state = {  
            term : ''
        }
    }

    onChangeSearch = (e) => {   
        const term = e.target.value
        this.setState({term})
        this.props.onChangeTerm(term)
    }

    render() {  
        return (
            <input type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.onChangeSearch}/>
        )
    }
}

export default SearchPanel