import logo from './logo.svg';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';



function App() {

  return (
    <div className="">
      <RouterProvider router={routes}>
        <Toaster />
      </RouterProvider>
    </div>
  );
}

export default App;
