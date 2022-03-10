import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import '../App.css';

const TodoItem = ({ todoItem, refreshList }) => {
	const { id, text, complete } = todoItem;

	const completedStyle = {
		textDecoration: 'line-through',
		color: 'rgba(0, 0, 0, 0.25)',
	};

	const completeTodo = (todoItem) =>
		axios
			.put(`/api/todos/${todoItem.id}/`, {...todoItem, complete: !todoItem.complete})
			.then((res) => refreshList());

	const updateTodo = (e, todoItem) =>
		axios
			.put(`/api/todos/${todoItem.id}/`, {...todoItem, text: e.target.value})
			.then((res) => refreshList());

	const deleteTodo = (id) =>
		axios
			.delete(`/api/todos/${id}/`)
			.then((res) => refreshList());

	return (
		<div key={id} className='todo-item'>
			<label>
				<input
					type='checkbox'
					checked={complete}
					onClick={() => completeTodo(todoItem)}
					style={{ display: 'none' }}
				/>

				{complete ? (
					<FontAwesomeIcon icon={faCheckCircle} />
				) : (
					<FontAwesomeIcon icon={faCircle} />
				)}
			</label>
			<input
				type='text'
				value={text}
				onChange={e => updateTodo(e, todoItem)}
				className='todo-item'
				style={complete ? completedStyle : null}
			/>
			<label>
				<input
					type='checkbox'
					onClick={() => deleteTodo(id)}
					style={{ display: 'none' }}
				/>
				<FontAwesomeIcon icon={faTimesCircle} />
			</label>
		</div>
	);
};

export default TodoItem;