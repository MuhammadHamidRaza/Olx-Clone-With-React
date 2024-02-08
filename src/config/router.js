import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Dashboard from '../view/Dashboard'
import Detail from '../view/Detail'
import Login from "../view/Dashboard/Login";
import Signup from '../view/Dashboard/Signup'
import Sell from "../view/Dashboard/Sell";
import Myadd from "../view/Dashboard/Myadd";
import Chating from "../view/Chat";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Dashboard />
      }, {
        path: "/detail/:adId",
        element: <Detail />
      }, {
        path: "/login",
        element: <Login />
      }, {
        path: "/signup",
        element: <Signup />
      },
      {
        path:"/dashboard/sell",
        element:<Sell/>
      },{
        path:"/dashboard/myadd",
        element:<Myadd/>
      },{
        path:"/chat/:adId",
        element:<Chating/>
      }
    
    ]
  }

]);


function Layout(){
  return <Outlet/>

}
function Router() {
  return <RouterProvider router={router} />
}
export default Router;