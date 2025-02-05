import './app-filter.css'

const AppFilter = ({onChangeFilter, filter})=> { 
    const btnsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThan1000', label: 'З/П больше 1000$'},
    ]

    const buttons = btnsData.map(({name, label}) => {  
        const clazz = name === filter ? 'btn-light' : 'btn-outline-light'

        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => onChangeFilter(name)}>
                {label}
            </button>
        )
    })


    return (
        <div className="btn-group">
            {buttons}
        </div>
    )

}

export default AppFilter