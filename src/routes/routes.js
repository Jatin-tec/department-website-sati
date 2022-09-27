import Homepage from "../pages/Home/Homepage"
import Login from "../pages/Login/Login"
import Attendence from "../pages/attendence/Attendence"
import Evalution from "../pages/Evaluation/Evalution"
import SignUp from "../pages/Signup/Signup"
import Viva from "../pages/Viva/Viva"
import Classes from "../pages/Classes/Classes"
import Main from "../pages/Main/Main"
import People from "../pages/Peoples/Peoples"
import DetailedPeople from "../pages/DetailedPeople/DetailedPeople"
import ClassWork from "../pages/ClassWork/ClassWork"
import GetAttendance from "../pages/GetAttendance/GetAttendance"

const authProtectedRoutes = [
    { path:'/', component: Homepage },
    { path:'/classes', component: Classes },
    { path:'/peoples/:code', component: People },
    { path:'/attendence/:code', component:Attendence },
    { path:'/evalute/:code', component:Evalution },
    { path:'/viva', component:Viva },
    { path:'/stream/:code', component: Main},
    { path:'/detailed-student', component: DetailedPeople},
    { path:'/detailed-student/:code', component: DetailedPeople},
    { path:'/classwork/:code', component: ClassWork},
    { path: '/getattendance/:code', component: GetAttendance},

]

const publicRoutes = [
    { path: '/login', component: Login },
    { path:'/Signup', component:SignUp },
]

export { authProtectedRoutes, publicRoutes }