const express = require('express')
const app = express()
const port =  8080

function getRandomSong() {
    frankSinatraSongs = [
        "New York, New York", "My Way", "Strangers In The Night", "I've Got You Under My Skin", "Fly Me To The Moon (In Other Words)", "Come Fly With Me", "That's Life", "Summer Wind", "Somethin' Stupid", "In the Wee Small Hours of the Morning", "Love and Marriage", "My Funny Valentine", "I Get a Kick Out of You", "It Was a Very Good Year", "Luck Be a Lady", "The Lady Is A Tramp", "Witchcraft", "The Best Is Yet To Come", "Chicago", "All The Way"];
    
    const randomIndex = Math.floor(Math.random() * 20); 
    
    return frankSinatraSongs[randomIndex];
}


app.get('/', (req, res) => {
    res.send(getRandomSong())
})

app.get('/birth_date', (req, res) => {
    res.send('December 12, 1915')
})

app.get('/birth_city', (req, res) => {
    res.send('Hoboken, New Jersey')
})

app.get('/wives', (req, res) => {
    res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx')
})

app.get('/picture', (req, res) => {
    res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg'); 
  });

  app.get('/protected', (req, res) => {
    try {

        if (!req.headers.authorization) {
            res.set('WWW-Authenticate', 'Basic realm="401"');
            return res.status(401).send('Not authorized.');
        }

        const authParts = req.headers.authorization.split(' ');
        if (authParts.length !== 2 || authParts[0] !== 'Basic') {
            res.set('WWW-Authenticate', 'Basic realm="401"');
            return res.status(401).send('Not authorized.');
        }

        const decoded = atob(authParts[1]);
        const [username, password] = decoded.split(':');

        if (username === 'admin' && password === 'admin') {
            return res.send('Welcome, authenticated client');
        }

        res.set('WWW-Authenticate', 'Basic realm="401"');
        return res.status(401).send('Not authorized.');

    } catch (error) {
        res.set('WWW-Authenticate', 'Basic realm="401"');
        return res.status(401).send('Not authorized.');
    }
});

app.get('/public', (req, res) => {
    res.send('Everybody can see this page')
})

app.listen(port, ()=> {
    console.log("Server Started " + port);
})