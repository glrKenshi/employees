import './app-info.css'

const AppInfo = ({employeesAmt, increaseAmt}) => { 
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании ООО "ЩЕБЕНЬ"</h1>
            <h2>Общее число сотрудников: {employeesAmt}</h2>
            <h2>Премию получат: {increaseAmt}</h2>
        </div>
    )
}

export default AppInfo