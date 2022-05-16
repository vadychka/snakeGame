import './App.css';
import { useEffect, useState } from 'react';
import { Registration } from './layouts/registration';
import { RecordList } from './layouts/recordList';
import { Game } from './layouts/game';
import { getRecord, postRecord } from './api/records';

function App() {
  const [score, setScore] = useState(0)
  const [register, setRegister] = useState('')
  const [loss, setLoss] = useState(false)
  const [respons, setRespons] = useState([])
  
  useEffect(()=> {
    async function getRecordArr (){
      const res = await getRecord()
      setRespons(res)
      // return res
    }
    getRecordArr()  
  },[])

  useEffect(()=> {
    if(loss){ 
      async function postInform(){
        const res = await postRecord({score, register})
        setRespons([...respons, res[0]])
        return res
      }
      postInform()
    }
  },[loss])
 
  return (<>
  <div className='wrapper'>
    <Game score = {score} setScore={setScore}
      register={register} setRegister={setRegister} loss={loss}
      setLoss={setLoss}/>
  <RecordList respons={respons}/>
  </div>
  {register ? '' : <Registration setRegister={setRegister}/> }
  </>
  );
}

export default App;
