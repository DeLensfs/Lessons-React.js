import React, {useState} from 'react';
import './css/App.css';
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";


function App() {
    const [users, setUsers] = useState([
        {
            id: 1,
            firstname: 'Bob',
            lastname: 'Lion',
            bio: 'Тестовый пользователь №1',
            age: 22,
            isHappy: true
        },
        {
            id: 2,
            firstname: 'Sam',
            lastname: 'Drake',
            bio: 'Тестовый пользователь №2',
            age: 25,
            isHappy: false
        }
    ]);
    const addUser=(newUser)=>{
        const id = users.length+1;
        // Добавляем id в новый объект
        const userWithId = { ...newUser, id };
        // Обновляем состояние, добавляя нового пользователя в список
        setUsers((prevUsers)=>[...prevUsers,userWithId]);
    }
    const deleteUser=(idUser)=>{
        setUsers(users.filter((el)=>el.id!==idUser));
    }
    // Функция для редактирования пользователя
    const editUser = (updatedUser) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updatedUser.id ? { ...user, ...updatedUser } : user
            )
        );
    };

    return (
        <div className="App">
            <Header title="Список пользователей"/>
            <main>
                <Users users={users} onEdit={editUser} onDelete={deleteUser}/>
            </main>
            <aside>
                <AddUser  onAdd={addUser}/>
            </aside>
        </div>
    );

}
// function addUser(user){
// console.log(user);
// }
export default App;
