import {React, useContext, useEffect, useState }  from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


function App() {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if (authData){
    const loggedInUser = localStorage.getItem('loggedInUser')
  }
  }, [authData])

  const handleLogin = (email, password) =>{
    if (email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    }
    else if (authData && authData.employees.find((e)=> e.email == email && password == e.password)){
      setUser('employee')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
    }
    else{
      alert("Invalid credentials")
    }
  }

  

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  )
}

export default App
