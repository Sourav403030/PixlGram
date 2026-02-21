import AppRoutes from './AppRoutes'
import AuthProvider  from './features/auth/store/AuthContext'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </div>
  )
}

export default App