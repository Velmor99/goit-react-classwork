import React from 'react';

export default function TaskEditor({ onAddTask }) {
	return (
		<div>
			<button onClick={onAddTask}>Добавить таск</button>
		</div>
	);
}
