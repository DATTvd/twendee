import {useEffect, useState} from 'react' 
import TableUser from './components/TableUser';
import MyPagination from './components/MyPagination';

function App() {

    const [users, setUsers] = useState([])
    const [infos, setInfos] = useState({})
    const [filters, setFilters] = useState({
      "results": 10,
      "page": 1,
    })
    const onPageChange = (newPage) => {
      setFilters({
        ...filters,
        page: newPage,
      })
    }
    useEffect(() => {
        fetch(`https://randomuser.me/api/?page=${filters.page}&results=${filters.results}&seed=abc`)
         .then(res => res.json())
         .then(data => {
           setUsers(data.results)
           setInfos(data.info)
         })
    },[filters])

  return (
    <>
      <TableUser users={users}/>
      <MyPagination infos={infos} onPageChange={onPageChange} />
    </>
  );
}

export default App
