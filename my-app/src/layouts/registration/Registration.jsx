import { Button } from '../../components/button'
import './Registration.css'
import { useForm } from "react-hook-form";

const Registration = ({setRegister}) => {
    
    const { register, handleSubmit } = useForm();

    return <div className='registration'>
        <h3> Write your nick name</h3>
        <form onSubmit={handleSubmit((data)=> {
            setRegister(data.nick_name)
        })}>
            <input className='registration__inp' {...register('nick_name')}/>
            <Button>Submit</Button>
        </form>
    </div>
}

export default Registration