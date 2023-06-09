import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees , setCoffees] = useState(loadedCoffees)


  return (
    <div className="App m-20">
      <h1 className='text-6xl text-center font-bold my-10 text-red-600'>Hot Hot Cold Coffees : {coffees.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {
          coffees.map(coffee => <CoffeeCard setCoffees={setCoffees} coffees ={coffees} key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
