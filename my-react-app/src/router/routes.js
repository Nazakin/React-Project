import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import WrongPage from "../pages/WrongPage";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPage},
    {path: '/*', component: WrongPage},
]
export const publicRoutes = [
    {path: '/login', component: Login},
    
]