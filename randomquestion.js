var Twit = require('./node_modules/twit/lib/twitter')
	, config1 = require('./node_modules/twit/config1');

var twit = new Twit(config1);

console.log('LyricalQs: Running.');

var questions = './data/questions.txt';
//var questions = './data/testquestions.txt';

var fs = require('fs'); 

function get_line(filename) {
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split("\n");
    var line_no = Math.floor(Math.random()*lines.length);

    if(+line_no > lines.length){
      throw new Error('File end reached without finding line');
    }

    var line = lines[+line_no];

    var lineLength = line.length;
    if (lineLength > 140) {
        throw new Error('The line is too long');
        
	}

    //Writes random line to console
	//console.log(line);

    //Posts random line to twitter
	twit.post('statuses/update', { status: line }, function(err, reply) {
	})

    //Logs random line in log file
    var now = new Date();
    var day = [ now.getMonth()+1, now.getDay(), now.getFullYear()]
    var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

    fs.appendFile('log.txt', line + ' ' + day.join("/") + ' ' + time.join(":") + '\n', function (err) {
    });

}

get_line(questions);