const form = document.querySelector('#frm');
const inpName = document.getElementById('name');
const inpEmail = document.getElementById('email');
const inpMsg = document.getElementById('msg');

const urlBase = "https://parseapi.back4app.com/classes/Chamado";

const headers = {
    "X-Parse-Application-Id": "Zk8NxNRBKdm57eMriIewhCfuoghpWRyeZEPQzj1p",
    "X-Parse-REST-API-Key": "FaZAEmmGgjIIY8TPztDcAiMkghsUY0AMFTbHLJgK",
};

const headersJson = {
    ...headers,
    "Content-Type": "application/json",
};

const addMsg = async(evt) => {
    evt.preventDefault();
    try {
        let msgInfo = {
            name: inpName.value,
            email: inpEmail.value,
            msg: inpMsg.value,
        }
    
        if(!msgInfo.name || msgInfo.name.trim() === "") {
            alert("Digite um nome");
            return;
        }
    
        const msgCreate = await fetch(urlBase, {
            method: "POST",
            headers: headersJson,
            body: JSON.stringify(msgInfo),
        });
    
        const data = await msgCreate.json();
        console.log("data", data);
    } catch (error) {
        console.log(error);
    }
};

form.addEventListener('submit', addMsg);