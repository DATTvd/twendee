import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSort} from '@fortawesome/free-solid-svg-icons'

function TableUser(props){
    const {users} = props
    const [dataConvert, setDataConvert] = useState([])

    useEffect(() => {
        setDataConvert([...users])  
    },[users])

    const handleSortByUsername = () => {
        const result = users.sort((a,b) => (a.login.username > b.login.username) ? 1 : ((b.login.username > a.login.username) ? -1 : 0))
        setDataConvert([...result])
    }

    const handleSortByFirstname = () => {
        const result = users.sort((a,b) => (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0))
        setDataConvert([...result])
    }

    return(
        <div>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                    <th>Fullname<FontAwesomeIcon style={{float: 'right'}} icon={faSort} onClick={() => handleSortByFirstname()} /></th>
                    <th>Username<FontAwesomeIcon style={{float: 'right'}} icon={faSort} onClick={() => handleSortByUsername()} /></th>
                    <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {dataConvert.map((item,index) => (
                        <tr key={index}>
                        <td>{`${item.name.title} ${item.name.first} ${item.name.last}`}</td>
                        <td>{item.login.username}</td>
                        <td><img src={item.picture.thumbnail} alt='thumbnail icon'></img></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableUser