import React,{lazy,Suspense, useState} from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
//import Grocery from './components/Grocery';
//using core React
// const heading=React.createElement("h1",{id:"heading"},"Hello World from React")
//using JSX -HTML like or XML like syntax
// const jsxHeading=<h1 id="heading">Namste using JSX</h1>
// const Title=()=>{
//     return <h1 id="heading">Namste Title using Functional Component</h1>
// }
// const HeadingComponent1=()=>(
//     <div id="container">
//         <Title />
//         {jsxHeading}
//         <h1 id="heading">Namste using Functional Component</h1>
//     </div>
    
// )
//  const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComponent1 />);
/**
 * Lazy Loading/Dynamic Bundling/Chunking/Code Splitting
 */
const Grocery=lazy(()=> import("./components/Grocery")); //Lazy Loading 
const AppLayout =()=>{
    const [userName,setUserName]=useState()
    return (
       <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
        <div className='app'>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
       </Provider>
        
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Error />
    },
    

])
const root=ReactDOM.createRoot(document.getElementById("root"))
 root.render(<RouterProvider router={appRouter} />)