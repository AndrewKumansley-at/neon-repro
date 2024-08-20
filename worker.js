const mod = require('.');

async function mainAsync() {
    console.log("mod.helloAsync() about to be called")
    const result = await mod.helloAsync();
    console.log("mod.helloAsync() has returned")
    console.log(result);
}

mainAsync();
