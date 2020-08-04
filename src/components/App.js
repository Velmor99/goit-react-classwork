import React, { Component } from 'react';
import Layout from './Layout/Layout.js';
//import Counter from './Counter'
import TaskList from './Task-List/TaskList';
import createTaskList from './utilits/create-task';
import TaskEditor from './TaskEditor/TaskEditor.js';

// export default function App () { //первое задание
//     return <Layout>
//         <Counter
//         initialValue={0}
//         step={2}
//         ></Counter>
//         </Layout>//просто контейнер со стилями
// }

export default class App extends Component {
	state = {
		tasks: []
	};

	addTask = () => {
		const task = createTaskList();

		console.log(task);

		this.setState((prevState) => {
			return {
				tasks: [ ...prevState.tasks, task ] //только так и накак иначе, расспыляем старый и новый
			};
		});
	};

	removeTask = (taskId) => {
		console.log(taskId);
		this.setState((prevState) => {
			return {
				tasks: prevState.tasks.filter((task) => task.id !== taskId)
			};
		});
	};

	render() {
		const { tasks } = this.state;
		return (
			<Layout>
				<TaskEditor onAddTask={this.addTask} />
				{tasks.length > 0 && <TaskList tasks={tasks} onRemoveTask={this.removeTask} />}
			</Layout>
		);
	}
}
