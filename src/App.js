import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
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

const AppLayout =()=>{
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
 root.render(<AppLayout />)