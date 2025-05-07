import { createBrowserRouter } from "react-router-dom";
import {App, Home,Courses,Login,SignUp,Contact,About } from "../../config/importPages.jsx";
import ProtectedRoute from "./Protected.route.jsx";




export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
          {  
            index: true,
            element: <Home />
          },
          {
            path: "courses",
            element: (
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            )
          },
          {
            path: "courses",
            element: (
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            )
          },
          {
            path: "contact",
            element: <Contact/>
          },
          {
            path: "about",
            element: <About/>
          },

        ]
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "signup",
      element: <SignUp />
    },
])