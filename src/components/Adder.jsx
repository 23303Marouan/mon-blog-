
  export default function handleAdd({ text, theme }) {
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

  export default function handleDelete(id) {
    setTasks(currentTasks => deleteTask(currentTasks, id));
  }

  export default function handleAddTheme(theme) {
    setThemes(currentThemes => addTheme(currentThemes, theme));
  }

  export default function handleDeleteTheme(id) {
    setThemes(currentThemes => deleteTheme(currentThemes, id));
  }

  export default function handleModif(task) {
    setTaskToEdit(task);
  }

  export default function handleDeleteAll() {
    setTasks([]);
  }

  export default function handleDeleteAllThemes() {
    setThemes([]);
  }