import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./routes/AppRoutes";
import { ThemeProvider } from '@material-ui/core/styles';
import {LightTheme} from "./shared/themes";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <BrowserRouter>
                <AppRoutes/>
                <div>
                    {/*<Hello name="SPFC" />*/}
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

export default App