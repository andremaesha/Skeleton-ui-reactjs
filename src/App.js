import User from "./Components/User";
import Articles from "./Components/Articles";

function App() {
    return (
        <div className="App">
            <header>
                <h1>React Skeleton</h1>
            </header>
            <div className="content">
                <Articles />
                <User />
            </div>
        </div>
    );
}

export default App;
