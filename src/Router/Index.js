import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Edit from '../Pages/Edit'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Index() {
    return (
        <>
            <BrowserRouter>
                <ToastContainer/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/edit/:todo_id' element={<Edit/>} />

                    {/* <Route path='/userinfo/:userId' element={<UpdateUser/>} /> */}


                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index