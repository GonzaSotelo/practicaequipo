const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const division = require("./division");
const argv = require("process");
const operador = argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

switch (operador) {
  case "sumar":
    console.log(sumar(argv[3], argv[4]));
    break;
  case "restar":
    console.log(restar(a, b));
    break;
  case "dividir":
    console.log(dividir(a, b));
    break;
  case "multiplicar":
    console.log(multiplicar(a, b));
    break;
}
