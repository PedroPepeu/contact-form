const mensagesList = document.getElementById('msgs');

const urlBase = "https://parseapi.back4app.com/classes/Chamado";

const headers = {
    "X-Parse-Application-Id": "Zk8NxNRBKdm57eMriIewhCfuoghpWRyeZEPQzj1p",
    "X-Parse-REST-API-Key": "FaZAEmmGgjIIY8TPztDcAiMkghsUY0AMFTbHLJgK",
};

const headersJson = {
    ...headers,
    "Content-Type": "application/json",
};

const loadMsg = async() => {
    const response = await fetch(urlBase, {
        method: "GET",
        headers: headers,
    });

    const data = await response.json();
    listMsg(data.results);
};

const listMsg = (mensages) => {
    mensagesList.innerHTML = "";
    for(const mensages of mensages) {
        const div = document.createElement("div");
        const name = document.createTextNode(`${mensages.name}`);
        const email = document.createTextNode(`${mensages.email}`);
        const text = document.createTextNode(`${msg.mensagem}`);
        const msg = document.createElement("div");
        msg.innerHTML = "Respondida";
        const bt = document.createElement("input");
        configBtCrt(bt, mensages);

        div.appendChild(name);
        div.appendChild(bt);
        div.appendChild(msg)
        div.appendChild("<br>");
        div.appendChild(email);
        div.appendChild("<br>");
        div.appendChild(text);

        mensagesList.appendChild(div);
    }
}

const configBtCrt = (button, msg) => {
    button.type = "checkbox";
    button.checked = msg.concluida;
    button.onchange = async () => {
        const response = await fetch(`${urlBase}/${tarefa.objectId}`, {
            method: "PUT",
            headers: headersJson,
            body: JSON.stringify({ respondida: !msg.respondida }),
        });

        const data = await response.json();
        console.log("data", data);
    };
};

form.addEventListener('submit', loadMsg);