import React, { useContext } from 'react'
import { Container, Nav, Navbar, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext  } from '../context/AuthContext'
export default function NavBar() {

    const {user , logoutUser} = useContext(AuthContext);

    return (
        <Navbar bg='dark' className='mb-4' style={{ height: "3.75rem" }} >
            <Container>
                <Link to="/" className='link-light text-decoration-none'><h2>ChatApp</h2></Link>
                <span className='text-warning'>{user ?  `Logged in as ${user.name}` :"Login"}</span>
                <Nav>
                    <Stack direction="horizontal" gap={3}>
                        {/* if we have a user , display this  */}
                        {
                            user && (<>
                            <Link onClick={logoutUser} className='link-light text-decoration-none'>Logout</Link>
                            
                            </>)
                        }
                        {/* if we dont have user , display this */}
                        {
                            !user && (<>
                            <Link to="/login" className='link-light text-decoration-none'>Login</Link>
                        <Link to="/register" className='link-light text-decoration-none'>Register</Link>
                            </>)
                        }




                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    )
}
