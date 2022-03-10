import React from 'react';

import TodoItem from './TodoItem';
import '../App.css';

const TodoList = ({ todoListItems, refreshList }) => (
	<div className='todo-list'>
		{todoListItems.map(todoItem => (
			<TodoItem
				todoItem={todoItem}
				refreshList={refreshList}
			/>
		))}
	</div>
);

export default TodoList;