import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
const Bookpage = () => {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] =useState([]);
    const [total, setTotal] = useState(0);
    const [page, setpage] =useState(1);
    const [is end, setIs end] = useState(false);
    const [query, setquery] = useState(리액트);
    const getBooks = async() => {
        const url ="https://dapi.kakao.com/v3/search/book?target=title";
        cosnt config={
            headers:{"Authorization":"KaKaoAK 923c6de04fdf908c4b009a39428e4ae2"}
            params: {"query": "리액트", "size":6, "page":page}
        }
        setLoading(true);
        const result=await axios.get(url, config);
        setBooks(result.data.documents);
        setTotal(result.data.meta.pageable_count);
        setIs_end(result.data.meta.is_end);
        console.log(result);
        setLoading(false); 
    }
    

    useEffect(()=>{
        getBooks();
    }, [])

    const OnSubmit = (e) => {
        e.preventDefault();
        getBooks();
    }
    if(loading) return <h1 className='text-center my-5'>로딩중....</h1>
  return (
    <Row className='my-5'>
        <Row>
            <Col className='mb-2'>
            <Form onSubmit={onSubmit}>
                <Form.Control value={query}
                onChange={(e)=>setquery(e.target.value)}
                placeholder ='검색어'/>
            </Form>
            </Col>
            <Col>검색수:{total}건</Col>
            검색수: {total}건
        </div>
        <Col>
            <h1 className='text-center'>도서검색</h1>
            <Row>
                {books.map(book=>
                    <Col key={book.isbn} className='box m-2'>
                        <img src={book.thumbnail ? book/thumbname: 'http://via.placeholder.com/120x150'}/>
                        <div className='ellipsis'>{book.title}</div>
                        <div>{}</div>
                    </Col>    
                )}
                <div className='text-center my-3'>
                    <Button disabled={page==1 && true}
                        onClick={()=>setpage(page-1)}>이전</Button>
                    <span className='my-3'>{page}</span>
                    <Button disabled={is_end && true}
                    <Button onClick={()=>setpage(page+1)}>다음</Button>
                </div>
            </Row>
        </Col>
    </Row>
  )
}

export default Bookpage