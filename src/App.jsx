import './App.css'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast';
function App() {

  return (
     <div className="bg-gray-200">
      <Toaster position="top-center" />
      <Home />
    </div>
  )
}

export default App
