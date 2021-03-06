// establishes a connection with the game server
const net = require("net");
const {IP, PORT} = require("./constants");
const stdin = process.stdin;
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // setTimeout(function(){ conn.write("Move: up"); }, 50);
    // setInterval(function(){ conn.write("Move: right"); }, 50);
    
   
  })
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  })
  conn.on('end', () => {
    console.log('You disconnected!');
  })

  return conn;
};

module.exports = connect;