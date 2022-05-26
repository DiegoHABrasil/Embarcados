const serialport = require('serialport')

let x = 0
const Readline = require('@serialport/parser-readline')
const port = new serialport('COM5',{baudRate:19200})
const parser = new Readline()
port.pipe(parser)
parser.on('data',(line) =>
{
    console.log("recebe: "+(line))
    grafico(x++,(line))
})