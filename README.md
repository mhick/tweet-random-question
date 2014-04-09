tweet-random-question
=====================

This simple script tweets a random question using [Node.js](http://nodejs.org) and the [twit Twitter API library for Node](https://github.com/ttezel/twit) module.

##To Use

This is based on Christian Paulsen's [instructions to build a Twitter bot](http://www.apcoder.com/2013/10/03/twitter-bot-20-minutes-node-js/). 

1. Install [Node.js](http://nodejs.org) and create a [Twitter](http://twitter.com) account for the bot. 
1. [Register your bot](https://dev.twitter.com/) as an application with Twitter. 
1. Install the [twit](https://github.com/ttezel/twit) module. Follow the instructions at the link to connect your Twitter account to twit.
1. Create a text file called `questions.txt`, using one line per question. I've included a `samplequestions.txt` file with a few seed questions. 

##What It Does

The script `randomquestion.js` will select a random line from `questions.txt` and post it to the Twitter account you created. It also logs the line selected in `log.txt`. 

##Features I'd like to add

* Add [attempt](https://github.com/TomFrost/node-attempt) to retry posting lines that are too line. 
* Search log to prevent re-posting lines that have already been posted. 
* Function to clear log file at regular intervals. 
