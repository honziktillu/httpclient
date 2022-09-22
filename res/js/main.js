const info = document.getElementById("info");
const send = document.getElementById("send");
const method = document.getElementById("method");
const endpoint = document.getElementById("endpoint");

const sendRequest = () => {
    switch(method.value) {
        case "GET":
            getEvent();
            break;
        case "POST":
            postEvent();
            break;
        case "PUT":
            putEvent();
            break;
        case "PATCH":
            patchEvent();
            break;
        case "DELETE":
            deleteEvent();
            break;
        default:
            console.log("Nefunguje chlapáku :(");
    }
}

send.onclick = sendRequest;

const getEvent = async () => {
    try {
        const res = await fetch(`http://127.0.0.1:3000/${endpoint.value}`, {
            method: "GET",
        });
        const data = await res.text();
        info.innerHTML = data;
    } catch (error) {
        console.log(error);
    }
}

const postEvent = async () => {
    try {
        const res = await fetch(`http://127.0.0.1:3000/${endpoint.value}`, {
            method: "POST",
            body: "jsenjoyer"
        });
        const data = await res.text();
        info.innerHTML = data;
    } catch (error) {
        console.log(error);
    }
}

const putEvent = async () => {
    try {
        const res = await fetch(`http://127.0.0.1:3000/${endpoint.value}`, {
            method: "PUT",
            body: "jsenjoyer"
        });
        const data = await res.text();
        info.innerHTML = data;
    } catch (error) {
        console.log(error);
    }
}

const patchEvent = async () => {
    try {
        const res = await fetch(`http://127.0.0.1:3000/${endpoint.value}`, {
            method: "PATCH",
            body: "jsenjoyer"
        });
        const data = await res.text();
        info.innerHTML = data;
    } catch (error) {
        console.log(error);
    }
}

const deleteEvent = async () => {
    try {
        const res = await fetch(`http://127.0.0.1:3000/${endpoint.value}`, {
            method: "DELETE",
            body: "jsenjoyer"
        });
        const data = await res.text();
        info.innerHTML = data;
    } catch (error) {
        console.log(error);
    }
}