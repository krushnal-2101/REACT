import About from "./components/About"
import ErrorPage from "./components/ErrorPage"
import Home from "./components/Home"
import Products from "./components/Product"
import Services from "./components/Services"
import MainLayout from "./Routes/MainLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          index:true,
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"services",
          element:<Services />
        },
        {
          path:"product/id:",
          element:<Products/>
        }
      ]
    }
  ])

  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;