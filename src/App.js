
//import component react bootstrap
import { Navbar, Container, Nav } from 'react-bootstrap'
//import component react router dom
import { Switch, Route, Link } from 'react-router-dom'
//import component Home
import Home from './pages/Home';
//import component post index
import PostIndex from './pages/posts/Index';
//import component post create
import PostCreate from './pages/posts/Create';
//import component post edit
import PostEdit from './pages/posts/Edit';


function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand to="/">EXPRESS.JS + REACT.JS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                  <Nav.Link as={Link} to='/table-data' className='nav-link'>HOME</Nav.Link>
                  <Nav.Link as={Link} to='/posts' className='nav-link'>POSTS</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/table-data" component={Home} />
        <Route exact path="/posts" component={PostIndex} />
        <Route exact path="/posts/create" component={PostCreate} />
        <Route exact path="/posts/edit/:id" component={PostEdit} />
      </Switch>
    </div>
  );
}

export default App;
