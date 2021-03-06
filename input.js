
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  };

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  console.log("key pressed: "+ key)
  
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w'){
    connection.write("Move: up")
  }
  if (key === 'a'){
    connection.write("Move: left")
  }
  if (key === 'd'){
    connection.write("Move: right")
  }
  if (key === 's'){
    connection.write("Move: down")
  }
  if (key === 'q'){
    connection.write("Say: QIP-QALM")
  }
}



module.exports = setupInput;