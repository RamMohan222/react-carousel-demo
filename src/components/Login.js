import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useCookies } from 'react-cookie';


function Login() {

    const [user, setState] = useState({ username: '', password: '' });
    const [isError, setError] = useState(false);
    const [cookies, setCookie] = useCookies(['name']);

    const setUsername = username => setState({ ...user, username });

    const setPassword = password => setState({ ...user, password });

    const onClear = () => setState({ username: '', password: '' })

    const onLogin = () => {
        if (user.password && user.username) {
            setError(false);
            setCookie('name', user.username, { path: '/' });
            window.location.reload();
        } else {
            setError(true)
        }
    }


    return (
        <Container fluid="md">
            <Row>
                <Col></Col>
                <Col>
                    <Form.Group className="mb-3">
                        <h3>Login</h3>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter Username</Form.Label>
                        <Form.Control placeholder="Username"
                            value={user.username}
                            onChange={e => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control placeholder="Password"
                            value={user.password}
                            onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button variant="primary" onClick={onLogin}>Login</Button>{' '}
                        <Button variant="danger" onClick={onClear}>Clear</Button>
                    </Form.Group>
                    {isError && <Alert key={'danger'} variant={'danger'}>
                        Please enter username and password!
                    </Alert>}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Login;