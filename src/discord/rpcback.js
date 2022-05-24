const RPC = require("discord-rpc");
const config = require('../../config.json');
import ToggleContainer from '../components/togglecontainer';
const rpc = new RPC.Client({

    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Beta tester",
        largeImageKey: "image",
        largeImageText: "testset",
    })

    console.log("RPC active");

})

rpc.login({
    clientId: config.rpcId
})



