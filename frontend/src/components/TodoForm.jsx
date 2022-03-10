import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import '../App.css';

const useInputValue = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		onChange: (e) => setValue(e.target.value),
		resetValue: () => setValue(''),
	};
};

const TodoForm = ({ onSubmit }) => {
	const { resetValue, ...text } = useInputValue('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(text.value);
		resetValue();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='todoInput' className='form-label'>
				Add task
			</label>
			<div className='form-input-btn-container'>
				<input
					type='text'
					id='todoInput'
					name='todoInput'
					className='form-input'
					placeholder='I need to...'
					{...text}
				/>
				<button type="submit" className='form-btn' aria-label='Add todo'>
					<FontAwesomeIcon icon={faPlusCircle} />
				</button>
			</div>
		</form>
	);
};

export default TodoForm;