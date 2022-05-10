import './Cell.css'

const Cell = ({type}) => {
    return <div className={`cell ${type}`}></div>
}

export default Cell