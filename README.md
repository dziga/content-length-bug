# content-length-bug

Install nodejs and run `npm install` in cloned repo.

Install nodemon with `npm install -g nodemon`

run `nodemon app.js` and go to localhost:3000

Comment out `res.set({ 'Transfer-Encoding': 'chunked' });` to reproduce error, nodemon will restart server for you, just refresh the page. 
