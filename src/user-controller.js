const users = [
    {id: 1, name: 'John', email: 'john@example.com'},
    {id: 2, name: 'Jane', email: 'jane@example.com'},
    {id: 3, name: 'Petya', email: 'petya@example.com'},
    {id: 4, name: 'Vasya', email: 'vasya@example.com'},
]

const getUsers = (req, res) => {
    console.log(req.params)
    if (req.params.id) {
        return res.send(users.find(user => user.id.toString() === req.params.id))
    }
    res.send(users);
}

const createUser = (req, res) => {
    console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(users);
}

module.exports = {
    getUsers,
    createUser,
}