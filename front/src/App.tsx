import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./routes/AppRoutes";
import {AppThemeProvider} from "./contexts";
import useWebSocket from 'react-use-websocket';
import {Enviroment} from "./utils/Enviroment";


const App: React.FC = () => {

    const { lastJsonMessage, sendMessage } = useWebSocket(Enviroment.SERVER_URL, {
        onOpen: () => console.log(`Connected to App WS`),
        onMessage: () => {
            if (lastJsonMessage) {
                console.log(lastJsonMessage);
            }
        },
        queryParams: { 'token': '123456' },
        onError: (event) => { console.error(event); },
        shouldReconnect: (closeEvent) => true,
        reconnectInterval: 3000
    });

    return (
        <AppThemeProvider>
            <BrowserRouter>
                <AppRoutes/>
                <div>
                    {/*<Hello name="SPFC" />*/}
                </div>
            </BrowserRouter>
        </AppThemeProvider>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

export default App