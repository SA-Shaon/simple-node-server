const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.Port || 5000;

app.use(cors())
// for data send to server side 
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello I am learning node from PH');
})

const users = [
    { id: 0, name: 'Rasmika', email: 'Rasmika@gmail.com' },
    { id: 1, name: 'shabana', email: 'shabana@gmail.com' },
    { id: 2, name: 'shucorita', email: 'shucorita@gmail.com' },
    { id: 3, name: 'shabnur', email: 'shabnur@gmail.com' },
    { id: 4, name: 'susmita', email: 'susmita@gmail.com' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})
// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})




// api request 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log("Listening From the port", port);
})