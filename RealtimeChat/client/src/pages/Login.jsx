import React, { useContext } from 'react'
import { Alert, Button, Form, Col, Stack, Row } from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'


export default function Login() {

  const {loginUser , loginError, loginInfo , updateLoginInfo, isLoginLoading } = useContext(AuthContext);
  return (
   <>
  <Form>
      <Row style={{
        height: '100vh',
        justifyContent: 'center',
        paddingTop: '10%'
      }}>

        <Col xs={6}>
        <Stack gap={3}> 
        <h2>Login</h2>
        <Form.Control type='email' placeholder='Email' onChange={(e)=> {updateLoginInfo({...loginInfo , email : e.target.value})}} />
        <Form.Control type='password' placeholder='Password'  />
        <Button variant='info' type='submit'>
          Register
        </Button>
          <Alert variant='danger'><p>An error had occurred</p></Alert>
        </Stack>
        </Col>

      </Row>
    </Form>
   </>
  )
}
