import './App.css';
import {Button, Col, Row} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import VBmap from "../components/pages/VBmap/VBmap";
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

                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <Link to="/dashboard">Dashboard</Link>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    <VBmap/>
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
