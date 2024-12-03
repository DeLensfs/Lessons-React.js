import './css/App.css';
import Header from "./components/Header";
import Users from "./components/Users";

function App() {
    return (
        <div className="App">
            <Header title="Список пользователей"/>
            <main>
                <Users/>
            </main>
    <aside>

    </aside>
        </div>
    );
}

export default App;
