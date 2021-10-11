import ReactDOM from "react-dom"

import { BrowserRouter, Route } from 'react-router-dom'
import Form from "./components/Form.jsx"

import "./App.css"


const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact render={
                (props) => <Form {...props} />}
            ></Route>
        </BrowserRouter>
    );
}


ReactDOM.render(<App />, document.querySelector("#root"))
