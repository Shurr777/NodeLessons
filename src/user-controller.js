/*const users = [
    {id: 1, name: 'John', email: 'john@example.com'},
    {id: 2, name: 'Jane', email: 'jane@example.com'},
    {id: 3, name: 'Petya', email: 'petya@example.com'},
    {id: 4, name: 'Vasya', email: 'vasya@example.com'},
]*/

const User = require('./user-model');

const getUsers = async (req, res) => {
    // Работа с массивом выше
    /*console.log(req.params)
    if (req.params.id) {
        return res.send(users.find(user => user.id.toString() === req.params.id))
    }*/
    //
    let users;
    if (req.params.id) {
        users = await User.findById(req.params.id)
    } else {
        users = await User.find()
    }

    res.send(users);
}

const createUser = async (req, res) => {
    // Работа с массивом выше
    /*console.log(req.body);
    const user = req.body;
    users.push(user);*/
    //
    const user = await User.create(req.body)
    res.send(user);
}

module.exports = {
    getUsers,
    createUser,
}