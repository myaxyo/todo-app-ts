import * as React from 'react';
import { FC, ChangeEvent, useState } from 'react';
import TodoTask from './components/TodoTask';
import { ITask } from './Interfaces';
import './style.css';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  // const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   if (e.target.name === 'task') {
  //     setTask(e.target.name);
  //   } else {
  //     setDeadline(Number(e.target.value));
  //   }
  // };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            placeholder="Task..."
            value={task}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTask(e.target.value);
            }}
          />
          <input
            type="number"
            name="deadline"
            placeholder="Deadline...(in days)"
            value={deadline}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setDeadline(Number(e.target.value));
            }}
          />
        </div>
        <button onClick={addTask}>Add Todo</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
