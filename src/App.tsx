import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./routes/AppRoutes";
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppRoutes/>
        <div>
            {/*<Hello name="SPFC" />*/}
        </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App