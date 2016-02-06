{"changed":true,"filter":false,"title":"app.js","tooltip":"/app.js","value":"//<Server-side  Create a Server>\n//<Send>:socket.emit\n//<Send>:io.emit(server-side)\n//<Receive>:socket.on\nvar app = require('express')();\nvar http = require('http').Server(app);\nvar io = require('socket.io')(http);\n\napp.get('/', function(req, res){\n\tres.sendFile(__dirname + '/index.html');\n});\n\nvar user_count = 0;\n\n//The new user is connacting into Server\nio.on('connection', function(socket){\n\n\t//<Read>Add New User|socket.on to tell server someone join chat room\n\tsocket.on('add user',function(msg){\n\t\tsocket.username = msg;\n\t\tconsole.log(\"New user:\" + msg + \" logged.\");\n\t\tio.emit('add user',{username: socket.username});//<send>io.emit sends message to other users\n\t});\n\n\t//<Read>Create a server monitor, to catch every message\n\tsocket.on('chat message', function(msg){\n\n\t\tconsole.log(socket.username + \":\" + msg);\n\n  \t\t//<Send>release new messages to all client-users\n\t\tio.emit('chat message', {\n\t\t\tusername:socket.username,\n\t\t\tmsg:msg\n\t\t});\n\t});\n\n\t//left chat room,disconnect server\n\tsocket.on('disconnect',function(){\n\t\tconsole.log(socket.username+\" left.\");\n\t\tio.emit('user left',{\n\t\t\tusername:socket.username\n\t\t});\n\t});\n\n\n});\n\n//指定port\nhttp.listen(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){\n//http.listen(process.env.PORT || 3000, function(){\n    //console.log('listening on *:3000');\n    var addr = http.address();\n    console.log(\"Chat server listening at\", addr.address + \":\" + addr.port);\n});","undoManager":{"mark":98,"position":100,"stack":[[{"start":{"row":18,"column":60},"end":{"row":18,"column":61},"action":"insert","lines":["s"],"id":421}],[{"start":{"row":18,"column":61},"end":{"row":18,"column":62},"action":"insert","lines":["e"],"id":422}],[{"start":{"row":18,"column":62},"end":{"row":18,"column":63},"action":"insert","lines":["n"],"id":423}],[{"start":{"row":18,"column":63},"end":{"row":18,"column":64},"action":"insert","lines":["d"],"id":424}],[{"start":{"row":18,"column":64},"end":{"row":18,"column":65},"action":"insert","lines":["s"],"id":425}],[{"start":{"row":18,"column":65},"end":{"row":18,"column":66},"action":"insert","lines":[" "],"id":426}],[{"start":{"row":18,"column":66},"end":{"row":18,"column":67},"action":"insert","lines":["m"],"id":427}],[{"start":{"row":18,"column":67},"end":{"row":18,"column":68},"action":"insert","lines":["e"],"id":428}],[{"start":{"row":18,"column":68},"end":{"row":18,"column":69},"action":"insert","lines":["s"],"id":429}],[{"start":{"row":18,"column":69},"end":{"row":18,"column":70},"action":"insert","lines":["s"],"id":430}],[{"start":{"row":18,"column":70},"end":{"row":18,"column":71},"action":"insert","lines":["a"],"id":431}],[{"start":{"row":18,"column":71},"end":{"row":18,"column":72},"action":"insert","lines":["g"],"id":432}],[{"start":{"row":18,"column":72},"end":{"row":18,"column":73},"action":"insert","lines":["e"],"id":433}],[{"start":{"row":18,"column":73},"end":{"row":18,"column":74},"action":"insert","lines":["t"],"id":434}],[{"start":{"row":18,"column":74},"end":{"row":18,"column":75},"action":"insert","lines":[" "],"id":435}],[{"start":{"row":18,"column":74},"end":{"row":18,"column":75},"action":"remove","lines":[" "],"id":436}],[{"start":{"row":18,"column":73},"end":{"row":18,"column":74},"action":"remove","lines":["t"],"id":437}],[{"start":{"row":18,"column":73},"end":{"row":18,"column":74},"action":"insert","lines":[" "],"id":438}],[{"start":{"row":18,"column":74},"end":{"row":18,"column":75},"action":"insert","lines":["t"],"id":439}],[{"start":{"row":18,"column":75},"end":{"row":18,"column":76},"action":"insert","lines":["o"],"id":440}],[{"start":{"row":18,"column":76},"end":{"row":18,"column":77},"action":"insert","lines":[" "],"id":441}],[{"start":{"row":18,"column":77},"end":{"row":18,"column":78},"action":"insert","lines":["o"],"id":442}],[{"start":{"row":18,"column":78},"end":{"row":18,"column":79},"action":"insert","lines":["t"],"id":443}],[{"start":{"row":18,"column":79},"end":{"row":18,"column":80},"action":"insert","lines":["h"],"id":444}],[{"start":{"row":18,"column":80},"end":{"row":18,"column":81},"action":"insert","lines":["e"],"id":445}],[{"start":{"row":18,"column":81},"end":{"row":18,"column":82},"action":"insert","lines":["r"],"id":446}],[{"start":{"row":18,"column":82},"end":{"row":18,"column":83},"action":"insert","lines":[" "],"id":447}],[{"start":{"row":18,"column":83},"end":{"row":18,"column":84},"action":"insert","lines":["u"],"id":448}],[{"start":{"row":18,"column":84},"end":{"row":18,"column":85},"action":"insert","lines":["s"],"id":449}],[{"start":{"row":18,"column":85},"end":{"row":18,"column":86},"action":"insert","lines":["e"],"id":450}],[{"start":{"row":18,"column":86},"end":{"row":18,"column":87},"action":"insert","lines":["r"],"id":451}],[{"start":{"row":18,"column":87},"end":{"row":18,"column":88},"action":"insert","lines":["s"],"id":452}],[{"start":{"row":21,"column":3},"end":{"row":21,"column":4},"action":"insert","lines":["<"],"id":453}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":5},"action":"insert","lines":[">"],"id":454}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":5},"action":"insert","lines":["E"],"id":455}],[{"start":{"row":21,"column":5},"end":{"row":21,"column":6},"action":"insert","lines":["e"],"id":456}],[{"start":{"row":21,"column":5},"end":{"row":21,"column":6},"action":"remove","lines":["e"],"id":457}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":5},"action":"remove","lines":["E"],"id":458}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":5},"action":"insert","lines":["R"],"id":459}],[{"start":{"row":21,"column":5},"end":{"row":21,"column":6},"action":"insert","lines":["e"],"id":460}],[{"start":{"row":21,"column":6},"end":{"row":21,"column":7},"action":"insert","lines":["a"],"id":461}],[{"start":{"row":21,"column":7},"end":{"row":21,"column":8},"action":"insert","lines":["d"],"id":462}],[{"start":{"row":14,"column":3},"end":{"row":14,"column":9},"action":"insert","lines":["<Read>"],"id":463}],[{"start":{"row":18,"column":52},"end":{"row":18,"column":53},"action":"insert","lines":["<"],"id":464}],[{"start":{"row":18,"column":53},"end":{"row":18,"column":54},"action":"insert","lines":[">"],"id":465}],[{"start":{"row":18,"column":53},"end":{"row":18,"column":54},"action":"insert","lines":["s"],"id":466}],[{"start":{"row":18,"column":54},"end":{"row":18,"column":55},"action":"insert","lines":["e"],"id":467}],[{"start":{"row":18,"column":55},"end":{"row":18,"column":56},"action":"insert","lines":["n"],"id":468}],[{"start":{"row":18,"column":56},"end":{"row":18,"column":57},"action":"insert","lines":["d"],"id":469}],[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["<"],"id":470}],[{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"insert","lines":[">"],"id":471}],[{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"insert","lines":["S"],"id":472}],[{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":["e"],"id":473}],[{"start":{"row":26,"column":9},"end":{"row":26,"column":10},"action":"insert","lines":["n"],"id":474}],[{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["d"],"id":475}],[{"start":{"row":0,"column":30},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":476}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["/"],"id":478}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["/"],"id":479}],[{"start":{"row":1,"column":2},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":480}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["/"],"id":481}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["/"],"id":482}],[{"start":{"row":2,"column":2},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":483}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["/"],"id":484}],[{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["/"],"id":485}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["<"],"id":486}],[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":[">"],"id":487}],[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":["S"],"id":488}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["e"],"id":489}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["n"],"id":490}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["d"],"id":491}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":[":"],"id":492}],[{"start":{"row":1,"column":9},"end":{"row":1,"column":20},"action":"insert","lines":["socket.emit"],"id":493}],[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["<"],"id":494}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[">"],"id":495}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["S"],"id":496}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["e"],"id":497}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["n"],"id":498}],[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["d"],"id":499}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":[":"],"id":500}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":25},"action":"insert","lines":["io.emit(server端)"],"id":501}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"remove","lines":["端"],"id":502}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["-"],"id":503}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["s"],"id":504}],[{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["i"],"id":505}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["d"],"id":506}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["e"],"id":507}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["<"],"id":508}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[">"],"id":509}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["E"],"id":510}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"remove","lines":["E"],"id":511}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["R"],"id":512}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["e"],"id":513}],[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["c"],"id":514}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["i"],"id":515}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["v"],"id":516}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["e"],"id":517}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":[":"],"id":518}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["e"],"id":519}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":21},"action":"insert","lines":["socket.on"],"id":520}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["<"],"id":521}],[{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":[">"],"id":522}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":32},"end":{"row":0,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1449107631873}