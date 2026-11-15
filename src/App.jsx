

import { useState, useEffect } from 'react';

import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import ThemeList from './components/themeList';

import { addTask, deleteTask, updateTask, getTasks } from './services/taskService';
import { addTheme, deleteTheme } from './services/themeService';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [themes, setThemes] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {

    async function loadTasks() {
      const data = await getTasks();
      setTasks(data);
    }

    loadTasks();
  },[]);

  // false = visiteur / true = administrateur
  const isAdmin = true;

  function handleAdd({ text, theme }) {
    if (taskToEdit) {
      setTasks(currentTasks =>
        updateTask(currentTasks, taskToEdit.id, { text, theme })
      );
      setTaskToEdit(null);
    } else {
      setTasks(currentTasks => addTask(currentTasks, { text, theme }));
      handleAddTheme(theme);
    }
  }

  function handleDelete(id) {
    setTasks(currentTasks => deleteTask(currentTasks, id));
  }

  function handleAddTheme(theme) {
    setThemes(currentThemes => addTheme(currentThemes, theme));
  }

  function handleDeleteTheme(id) {
    setThemes(currentThemes => deleteTheme(currentThemes, id));
  }

  function handleModif(task) {
    setTaskToEdit(task);
  }

  function handleDeleteAll() {
    setTasks([]);
  }

  function handleDeleteAllThemes() {
    setThemes([]);
  }

  return (
    <main className="container">
      <h1>Mon blog</h1>

      {isAdmin && (
        <>
          <ThemeList
            themes={themes}
            onDelete={handleDeleteTheme}
          />

          <TaskForm
            onAdd={handleAdd}
            taskToEdit={taskToEdit}
          />
        </>
      )}

      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onModif={handleModif}
        isAdmin={isAdmin}
      />

      {isAdmin && tasks.length > 0 && (
        <button className="deletTheme" onClick={handleDeleteAll}>
          Tout supprimer
        </button>
      )}

      {isAdmin && themes.length > 0 && (
        <button className="deletTheme" onClick={handleDeleteAllThemes}>
          Supprimer tous les thèmes
        </button>
      )}
    </main>
  );
}

export default App;
