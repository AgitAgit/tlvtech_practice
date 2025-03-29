import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementAsync } from '../redux/actions/counterActions'

function Counter() {
    const dispatch = useDispatch()
    const { count, loading, error } = useSelector(state => state.counter)

    return (
        <div>
            <h2>Count: {count}</h2>
            {loading && <p>Loading...</p>}
            {error && <p>ERROR:{error}</p>}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button
            onClick={() => dispatch(incrementAsync())}
            disabled={loading}
            >Increment async</button>
        </div>
    )
}

export default Counter