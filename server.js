var express = require('express'); // npm install express
var app = express();
var cors = require('cors') // npm install cors
let sse = require('server-side-event')(10000);// the retry time, default 15 second , unit ms

app.use(cors()) // allow cross origin access

app.get('/', (req, res) => {
    res.send('kevin\'s sse server'); // home path
})

app.get('/somePaht/',function(req, res) {

    sse(res);
    var i = 0
    var ticker = setInterval(function() {
    
    res.push({
        'message': 'replied your comment on How to prototype effectively submitted to Android Development', 
        'id': 'k343459953YGHJHj' + i++,
        'category': 'comment',
        'createdAt': 'Mon, 04 Sep 2017 11:58:19 GMT',
        'read': false,
        'to': 'kevin Tumbo',
        'from': {
            'userId': '897r89732983r89u',
            'userName': 'Jimmy Kimani',
        },
        'resourceId': '848080384030'
    });
    }, 10000);
})

app.listen(8808, () => {
    console.log('listening'); // check if server is running
});