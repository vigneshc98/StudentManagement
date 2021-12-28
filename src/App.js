import './App.css';
import Create from './component/create/Create';
import Read from './component/read/Read';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Update from './component/update/Update';
import Delete from './component/delete/Delete';
import FeeDetail from './component/fee/FeeDetail';
import Login from './component/admin/Login';
import React from 'react'
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import AuthContextProvider from './component/contextApi/AuthContextapi'
import ProtectedRoute from './component/helpers/ProtectedRoute';
import PublicRoute from './component/helpers/PublicRoute';
import Footer from './component/footer/Footer';
import Home2 from './component/home/Home2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './component/error/Error';

function App() {
  return (
    <div  className="container">
      <AuthContextProvider>
          <Router>
          <Routes>
              <Route path="/" element={
                 <PublicRoute> 
                    <Navbar/>
                    <ToastContainer /> 
                    <Home/>
                    <Home2/>
                    <Footer/>
                 </PublicRoute>
                } />
              <Route path="/login" element={ 
                  <PublicRoute> 
                    <ToastContainer /> 
                    <Login/> 
                  </PublicRoute>
                }  />
              <Route path="/main" element={ 
                  <ProtectedRoute> 
                    <Navbar/>  
                    <ToastContainer />  
                    <Read/>  
                  </ProtectedRoute>
                } />
              <Route path="/create" element={
                  <ProtectedRoute>  
                    <ToastContainer />  
                    <Create/> 
                  </ProtectedRoute>
                 } />
              <Route path="/update" element={ 
                  <ProtectedRoute>  
                    <ToastContainer />  
                    <Update/> 
                  </ProtectedRoute>
                 } />
              <Route path="/delete" element={ 
                  <ProtectedRoute>  
                    <ToastContainer />  
                    <Delete/>  
                  </ProtectedRoute>
                 } />
              <Route path="/feedetail" element={ 
                  <ProtectedRoute>  
                    <Navbar/>
                    <ToastContainer />  
                    <FeeDetail/> 
                  </ProtectedRoute>
                 } />
              <Route path="*" element={<Error/>} />
            </Routes>
          </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
