import './App.css';
import { useEffect, useState } from 'react';
import Table from './components/Table';


function App() {
  // const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [apiMsg, setApiMsg] = useState('');
  useEffect(() => {
    async function getNames() {
      try {
        const response = await fetch('http://localhost:5000/user/all');
        const data = await response.json()
        console.log(data)
        setApiMsg(data)
      } catch (err) {
        console.error(err?.message ?? "err fetching data")
      }
    }

    setTimeout(() => {
      getNames()
    }, 3000)


  }, [])



  return (
    <>
      <h1>Hello World</h1>
      <Table names={apiMsg}/>
    </>
  )
}

export default App;