import React from "react";
import User from "./User";

class Users extends React.Component {

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
        if(this.props.users.length>0)
        return (
            <div >
                {this.props.users.map((user)=> (
                   <User onDelete={this.props.onDelete} onEdit={this.props.onEdit} key={user.id}  user={user}/>
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
