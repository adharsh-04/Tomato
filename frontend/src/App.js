
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './Root';
import Home from './Components/Home/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';

function App() {
  let router=createBrowserRouter([{
    path:'',
    element:<Root/>,
    children:[
      {
        path:'',
        element:<Home/>,
        
      },
      {
        path:'/signup',
        element:<Signup/>,
      }
      ,
      {
        path:'/signin',
        element:<Signin/>
      }
    ]
  }])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
