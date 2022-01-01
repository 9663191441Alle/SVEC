import React from 'react'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import AndhraBank from './AndhraBank'
import ClassComponent from './ClassComponent'
import FormRendering from './FormRendering'
import Functional from './Functional'
import ListRendering from './ListRendering'

export default function Home() {
    return (
        <div>
            <BrowserRouter>
             <Routes>
                 
                 
                 <Route path="/home" element={<Main/>}></Route>
                 <Route path="/login" element={<FormRendering/>}></Route>
                 <Route path="/functional" element={<Functional/>}></Route>
                 <Route path="/listrendering" element={<ListRendering/>}></Route>
                 <Route path="/andhrabank" element={<AndhraBank/>}></Route>
                 <Route path="/classcomponent" element={<ClassComponent/>}></Route>

             </Routes>
            </BrowserRouter>
        </div>
    )
}



function Main(){
    return (
        <>
        <h1>::home page::</h1>
        <Link to="/login">login</Link>
        </>
    )
}