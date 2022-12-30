import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import About from "../../pages/About/About"
import Home from "../../pages/Home/Home/Home"
import Login from "../../pages/Login/Login"
import Media from "../../pages/Media/Media"
import SignUp from "../../pages/SignUp/SignUp"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/media',
                loader:()=> fetch(`https://media-app-server.vercel.app/posts`),
                element: <Media></Media>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router