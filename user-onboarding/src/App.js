// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import NewForm from './components/form-component';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import NewTable from './components/table';
import './App.css';

function App() {
  const [post, setPost] = useState([])

  const submitUser = (newUser) => {
    axios
      .post('https://regres.in/api/users', newUser)
      .then((response) => {
        setPost(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Container className='App'>
      <Row>
        <Col xs='10' md='4' xl='5' style={{ marginRight: '5%' }}>
          <NewForm submitUser={submitUser}></NewForm>
        </Col>
        <Col>
          <h1>USERS</h1>
          <NewTable USER={post} />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
