import './RecordList.css'

const RecordList = ({respons})=> {
    respons.sort((a,b) => b.record_points - a.record_points)

    return <div className='record-list'>
        <h2>Record List</h2>
        <div className='record-list__table'>
            {respons.map(record => {
                return <div key={record.record_id} className='record-list__raw'>
                <div className='record-list__name'>
                    {record.nick_name}
                    </div>
                <div className='record-list__score'>
                  {record.record_points}
                </div>
                </div>
            })}
        </div>
    </div>
}

export default RecordList