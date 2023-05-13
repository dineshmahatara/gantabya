import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '@/redux/reducerSlice/userSlice'
const Home =(props)=>{
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(setToken(''))
  }

    return(
        <div>
        i am home page
        <button onClick={props.handleLogout}>Logout</button>
      </div>
    )
}
export default Home