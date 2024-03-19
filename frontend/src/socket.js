const socket = new WebSocket("ws://localhost:8080/socket");

const connect = () => {
    console.log("Attempt to connect");

    socket.onopen = () => {
        console.log("Successfully connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
    };

    socket.onclose = event => {
        console.log("Socket closed: ", event);
    };

    socket.onerror = error => {
        console.log("Socket Error", error);
    };
};

let sendMsg = msg => {
    console.log("Sending message", msg);
    socket.send(msg);
}

export { connect, sendMsg }