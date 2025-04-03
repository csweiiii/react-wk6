import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from './pages/Home'
import Productlist from './components/Productlist'
import BookIntroduction from './pages/BookIntroduction'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/productlist" element={<Productlist />} /> 
          <Route path="/BookIntroduction/:id" element={<BookIntroduction />} /> 
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App