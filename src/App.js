// import React from 'react'
// import Login from './components/Login'
// import Browse from './components/Browse'
// import { createBrowserRouter } from 'react-router-dom'

// import { RouterProvider } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import appStore from './utils/appStore'
// function App() {
//   const appRouter = createBrowserRouter([
//     {
//       path:"/",
//       element:<Login/>,
//     },
//     {
//       path:"/browse",
//       element:<Browse/>,
//     }
//   ])
//   return (
//     <div >
//       <Provider store={appStore}>
//       <RouterProvider router={appRouter}/>
//       </Provider>
//     </div>
//   )
// }

// export default App
import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;