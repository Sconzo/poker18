//arquivo de configuração do servidor de WebSockets

const WebSocket = require('ws');

let userList = [];
function onError(ws, err) {
    console.error(`onError: ${err.message}`);
}
function sendUserList(wss) {
    const userListMessage = {
        type: 'userList',
        data: userList
    };
    if (wss.clients) {
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(userListMessage));
            }
        });
    }
}


function onMessage(ws, data, wss) {
    console.log(`onMessage: ${data}`);
    const userData = JSON.parse(data);

    if(userData.type === "create"){
        userList.push(userData.data)
    }
    else if(userData.type === "getUserList"){
        sendUserList(wss);
    }
    else if (userData.type === "voted"){
        const userIndex = userList.findIndex(user => user.userId === userData.userId);
        if (userIndex !== -1) {
            userList[userIndex].vote = userData.vote;
        }
        sendUserList(wss);
    }
    else if (userData.type === "clear"){
        userList.forEach(user => {
            user.vote = "";
        })
    }
    console.log(`User List => ${JSON.stringify(userList)}`);
}

function onConnection(ws, req, wss) {
    ws.on('message', data => onMessage(ws, data, wss));
    ws.on('error', error => onError(ws, error));
}

function broadcast(jsonObject) {
    if (!this.clients) return;
    this.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(jsonObject));
        }
    });
}

module.exports = (server) => {
    const wss = new WebSocket.WebSocketServer({
        server
    });

    wss.on('connection', (ws, req) => {
        onConnection(ws, req, wss);
    });

    console.log(`App Web Socket Server is running!`);
    return wss;
}