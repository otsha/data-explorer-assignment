import { useEffect, useState } from "react"
import { fetchData } from "./services/fetchData"
import Filter from './components/Filter'
import ResultCard from "./components/ResultCard"

const App = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('Akaa')

  const handleFetchData = async () => {
    const newData = await fetchData()
    console.log(newData)
    setData(newData)
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  return (
    <>
      <p>Katso vieraskielisten (0-7 v.) osuus päiväkotilapsista omassa kunnassasi.</p>
      <Filter municipalities={data.map(d => d.municipality)} handleSearch={setSearchTerm}></Filter>
      {(data && data.length > 0) && (searchTerm && searchTerm.length > 0) && <ResultCard data={data.filter((m) => m.municipality.toUpperCase() === searchTerm.toUpperCase())[0]} />}
      {(data && data.length > 0) && <ResultCard data={data[0]} />}
      <p>Lähde: Tilastokeskus (2024)</p>
    </>
  )
}

export default App
