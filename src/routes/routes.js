import Homepage from "../pages/Home/Homepage"
import Login from "../pages/Login/Login"
import Attendence from "../pages/attendence/Attendence"
import Evalution from "../pages/Evaluation/Evalution"
import SignUp from "../pages/Signup/Signup"
import Viva from "../pages/Viva/Viva"
import Classes from "../pages/Classes/Classes"

const authProtectedRoutes = [
    {path:'/', component: Homepage },
    {path:'/classes', component: Classes},
    {path:'/Attendence',component:Attendence},
    {path:'/Evalute',component:Evalution},
    {path:'/Viva',component:Viva},
]

const publicRoutes = [
    { path: '/login', component: Login},
    {path:'/Signup',component:SignUp},
]

export { authProtectedRoutes, publicRoutes }