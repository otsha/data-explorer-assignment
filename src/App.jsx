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
    <div className="p-6 md:p-12 mt-8 w-full h-full flex flex-col gap-4 text-white">
      <h1 className="text-xl font-bold">Katso vieraskielisten osuus päiväkotilapsista (0-7 v.) omassa kunnassasi.</h1>
      <Filter municipalities={data.map(d => d.municipality)} handleSearch={setSearchTerm}></Filter>
      {(data && data.length > 0) && (searchTerm && searchTerm.length > 0) && <ResultCard data={data.filter((m) => m.municipality.toUpperCase() === searchTerm.toUpperCase())[0]} />}
      {(data && data.length > 0) && <ResultCard data={{...data[0], municipality: 'Koko Suomi' }} />}
      <p className="text-xs">Lähde: Tilastokeskus (2024) - Varhaiskasvatukseen osallistuneet vieraskieliset ja ulkomaalaiset lapset alueen ja iän mukaan</p>
    </div>
  )
}

export default App
