import React from 'react';

const TaskList = ({ tasks, onRemoveTask }) => (
	<ul>
		{tasks.map(({ id, text }) => (
			<li key={id}>
				<p>{text}</p>
				<button type="button" onClick={() => onRemoveTask(id)}>
					Удалить
				</button>
			</li>
		))}
	</ul>
);

export default TaskList;
