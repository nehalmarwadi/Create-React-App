import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import UserCard from './components/UserCard/UserCard';

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState({ error: false, msg: '' })

  return (
    <div className='bg-slate-800 min-h-screen'>
      <NavBar data={data} setData={setData} setIsLoading={setIsLoading} setIsError={setIsError} />
      {
        isLoading &&
        <div class="flex flex-col items-center justify-center h-screen bg-slate-600">
          <div class="loader"></div>
          <div class="text-white mt-4 text-lg">Loading...</div>
        </div>
      }
      <ul className='w-full grid justify-items-center items-center grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-2'>
        {data.map((user) => <UserCard key={user?.id} user={user} />)}
      </ul>
      {
        isError?.error &&
        <div class="flex flex-col items-center justify-center h-screen bg-slate-600">
          <div class="text-white mt-4 text-lg">{isError?.msg}</div>
        </div>
      }
    </div>
  );
}

export default App;