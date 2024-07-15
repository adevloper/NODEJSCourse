let ws;
function connectWebSocket() {
    // create
    ws = new WebSocket('ws://localhost:3000');

    //event handling - open,onnmessage,onclose
    ws.onopen = () => {
        console.log('connected tu the server');

    };
    ws.onmessage = (event) => {
        const chat = document.getElementById("chat")
        const message = document.createElement("div")
        const reader = new FileReader()
        //Asynchronous function
        reader.onload = () => {

            message.textContent = reader.result;
            chat.appendChild(message)

        }
        if (event.data instanceof Blob)
        {
            reader.readAsText(event.data);
        }
    };
    ws.onclose = () => {

    };

}

function sendMessage() {
    if(ws.readyState===WebSocket.OPEN)
    {
        const input = document.getElementById('message');
        ws.send(input.value)

        //clear
        input.value='';
    }
    //ws.onmessage('Hi');
}
connectWebSocket();