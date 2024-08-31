import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Cupcakes from './components/Cupcakes'
import NewCupcake from './components/NewCupcake'

export default function App() {
  document.title="Sugar Rush"
  return (
    <div className='container'>
      <Navbar/>
      <Welcome/>
      <Cupcakes/>
      <NewCupcake/>
    </div>
  )
}
