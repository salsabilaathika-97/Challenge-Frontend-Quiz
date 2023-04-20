import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { useSelector } from 'react-redux';

const Navigation = () => {
    const {userData} = useSelector((state) => state);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Welcome, {userData.name}
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Login as: <a href="#">User</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;