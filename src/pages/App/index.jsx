
import { useRoutes } from 'react-router-dom';
import './App.css'
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Signin from '../Signin';
const App =()=>{
    let routes = useRoutes([
        {
            path: '/',
            element: <Home/>
        }
    ])
    return(
        <h1 className="bg-amber-500">
            <Home/>
            <MyAccount/>
            <MyOrder/>
            <MyOrders/>
            <NotFound/>
            <Signin/>

        </h1>
    )
};
export default App;