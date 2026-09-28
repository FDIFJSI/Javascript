//asynchronous - refers to doing more than one task(multitasking)
async  function getjoke()
{
    let link = "https://official-joke-api.appspot.com/random_joke"
    //TODO: mskr the computer read this link
    let result = await fetch(link)
    console.log (await result.json())
}

getjoke()//use fn