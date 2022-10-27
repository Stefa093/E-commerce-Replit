import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import LoginScreen from './Pages/LoginScreen'
import ProductId from './Pages/ProductId'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import Purchases from './Pages/Purchases'

function App() {

  // useEffect(() => {
  //   const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/users'
    
  //   const data = {
  //     firstName: 'Estefania',
  //     lastName: 'Salazar',
  //     email:'estefaniasalazar093@gmail.com',
  //     password:'abcd1234',
  //     phone:'3218267900',
  //     role: 'admin'
  //   }

  //   axios.post(URL, data)
  //   .then(res =>console.log(res.data))
  //   .catch(err => console.log(err))
  // }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/product/:id' element={<ProductId/>}/>
        <Route path ='/login' element={<LoginScreen/>}/>
        <Route>
          <Route element={<ProtectedRoutes/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
