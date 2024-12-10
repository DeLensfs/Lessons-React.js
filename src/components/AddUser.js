import React,{ useState } from 'react';

function AddUser({onAdd}) {
    // console.log(key)
// const [users, setUsers]=useState([
//     {
//         firstname:'',
//         lastname:'',
//         bio:'Т',
//         age:1,
//         isHappy:false
//     }
//
// ])
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [bio, setBio] = useState('');
    const [age, setAge] = useState('');
    const [isHappy, setIsHappy] = useState(false);

    const handleAddUser = (e) => {
        e.preventDefault(); // Останавливаем перезагрузку страницы при отправке формы
        // Формируем нового пользователя
        const newUser = {
            firstname,
            lastname,
            bio,
            age: Number(age), // Преобразуем возраст в число
            isHappy
        };
        // Вызываем функцию onAdd для добавления нового пользователя
        onAdd(newUser);
        // Очищаем форму после добавления
        setFirstname('');
        setLastname('');
        setBio('');
        setAge('');
        setIsHappy(false);
    };


    return (
        <form>
            <input placeholder="Имя" onChange={(e)=>setFirstname(e.target.value)}/>
            <input placeholder="Фамилия" onChange={(e)=>setLastname(e.target.value)}/>
            <textarea placeholder="Биография" onChange={(e)=>setBio(e.target.value)}></textarea>
            <input placeholder="Возраст" onChange={(e)=>setAge(e.target.value)}/>
            <label htmlFor="isHappy">Счастлив?</label>
            <input type="checkbox" id="isHappy" onChange={(e)=>setIsHappy(e.target.value)}/>
            <button type="botton" onClick={handleAddUser}>Добавить</button>

        </form>
    );
}

export default AddUser
