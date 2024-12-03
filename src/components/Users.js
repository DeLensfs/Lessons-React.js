import React from "react";

class Users extends React.Component {
constructor(props) {
    super(props);
    this.state={
        users : [
            {
                id: 1,
                firstname:'Bob',
                lastname:'Lion',
                bio:'Тестовый пользователь №1',
                age:22,
                isHappy:true
            },
            {
                id: 2,
                firstname:'Sam',
                lastname:'Drake',
                bio:'Тестовый пользователь №2',
                age:25,
                isHappy:false
            }
        ]
    }
}

    // users = [
    //     {
    //         id: 1,
    //         firstname:'Bob',
    //         lastname:'Lion',
    //         bio:'Тестовый пользователь №1',
    //         age:22,
    //         isHappy:true
    //     },
    //     {
    //         id: 2,
    //         firstname:'Sam',
    //         lastname:'Drake',
    //         bio:'Тестовый пользователь №2',
    //         age:25,
    //         isHappy:false
    //     }
    // ]

    render() {
        if(this.state.users.length>0)
        return (
            <div >
                {this.state.users.map((user)=> (
                    <div className='user' key={user.id}>
                        <h3>{user.firstname} {user.lastname}</h3>
                        <p>{user.bio}</p>
                        <b>{user.isHappy?"Счастлив :)" : "Не особо :("}</b>
                        </div>
                ))}
            </div>
        );
        else
            return (
                <div className="user">
                    <h3>Пользователей нет!</h3>
                </div>
            );
    }

}

// function App() {
//     return (
//         <div className="App">
//             <Header title="Список пользователей" />
//         </div>
//     );
// }

export default Users;
