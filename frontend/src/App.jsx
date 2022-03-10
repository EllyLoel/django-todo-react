import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';

const App = () => {
	const [todoListItems, setTodoListItems] = useState([]);

	const refreshList = () => {
    axios
      .get("/api/todos/")
      .then((res) => setTodoListItems(res.data))
      .catch((err) => console.log(err));
	}

  useEffect(() => {
		refreshList();
  }, []);

  return (
    <main className='App'>
			<TodoForm
				onSubmit={(text) =>
					text &&
					axios
						.post("/api/todos/", { text, complete: false })
						.then((res) => this.refreshList())
				}
			/>
			{todoListItems.length > 0 ? (
				<>
					<TodoList
						todoListItems={todoListItems}
						setTodoListItems={setTodoListItems}
						refreshList={refreshList}
					/>
					<button
						onClick={() => setTodoListItems([])}
						className='clear-list'
					>
						<FontAwesomeIcon icon={faTrash} /> clear list
					</button>
				</>
			) : null}
		</main>
  );
};

export default App;
