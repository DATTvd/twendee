import { Button, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const totalPage = [1,2,3,4,5,6,7,8,9,10]

function MyPagination(props){
    const {infos, onPageChange} = props

    const handlePrev = (currentPage) => {
        onPageChange(currentPage - 1)
    }
    const handleNext = (currentPage) => {
        onPageChange(currentPage + 1)
    }

    const handleChangePage = (item) => {
        onPageChange(item)
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Pagination>
                <Button disabled = {infos.page === 1} variant="primary" onClick={() => handlePrev(infos.page)}>Prev</Button>
                    {totalPage.map((item,index) => (
                        <Pagination.Item active={infos.page === item} key={index} onClick={() => handleChangePage(item)}>{item}</Pagination.Item>     
                    ))} 
                <Button disabled = {infos.page === 10} variant="primary" onClick={() => handleNext(infos.page)}>Next</Button>
            </Pagination>
        </div>
    )
}

export default MyPagination 