import './App.css';
import {Button, Col, Row} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from "../components/pages/About";
// console.log(process.env)


function App() {

    return (
        <div className="App">
            <Router>
                <div>
                    {/*<ul>*/}
                    {/*    <li>*/}
                    {/*        <Link to="/">Home </Link>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link exect to="/about" component={About}>About </Link>*/}
                    {/*        /!*<About/>*!/*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link to="/dashboard">Dashboard</Link>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    <About/>
                    <hr/>

                    <Switch>
                        <Route exact path="/" component=""/>

                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
