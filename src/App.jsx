import './App.css'
import Header from './containers/header/header.jsx';
import TodoApp from './containers/todo-app/todo-app.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <TodoApp />
      </main>
    </>
  )
}

export default App
