let {menu, printMenu, printMessage} = require('./food')

function mainLoop() {
    printMenu(menu, (option) => {
        // console.log('youve chosen', option)
        let o = parseInt(option)
        if (o != '' && o > 0 && o < 4) {
            console.log('youve chosen', o)
            setTimeout(mainLoop, 500)
        } else {
            console.log('option inexistent')
            setTimeout(mainLoop, 500)
        }
    })
}

mainLoop()