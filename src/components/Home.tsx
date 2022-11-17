import { useAppDispatch } from '../hooks/Hooks'
import { decrement, increment } from '../stores/slice/CounterSlice'

const Home = () => {

    const dispatch= useAppDispatch()

    return (
        <div className="Home">
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Home