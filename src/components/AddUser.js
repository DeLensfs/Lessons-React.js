import React,{ useState,useRef  } from 'react';

function AddUser({onAdd, user}) {
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
    const myForm = useRef(null); // Используем useRef для работы с формой
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [bio, setBio] = useState('');
    const [age, setAge] = useState('');
    const [isHappy, setIsHappy] = useState(false);

    // const userAdd={};
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
        if(user)
            newUser.id=user.id
        // Вызываем функцию onAdd для добавления нового пользователя
        onAdd(newUser);
        // Очищаем форму после добавления
        setFirstname('');
        setLastname('');
        setBio('');
        setAge('');
        setIsHappy(false);
        myForm.current.reset();
    };


    return (
        <form ref={myForm}>
            <input placeholder="Имя" onChange={(e)=>setFirstname(e.target.value)}/>
            <input placeholder="Фамилия" onChange={(e)=>setLastname(e.target.value)}/>
            <textarea placeholder="Биография" onChange={(e)=>setBio(e.target.value)}></textarea>
            <input placeholder="Возраст" onChange={(e)=>setAge(e.target.value)}/>
            <label htmlFor="isHappy">Счастлив?</label>
            <input type="checkbox" id="isHappy" onChange={(e)=>setIsHappy(e.target.checked)}/>
            <button type="botton" onClick={handleAddUser}>Добавить</button>

        </form>
    );
}

export default AddUser
