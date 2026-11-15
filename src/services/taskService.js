const API_URL = "http://localhost:3000";

// Récupérer toutes les tâches
export async function getTasks() {
  const response = await fetch(`${API_URL}/tasks`);
  return await response.json();
}

export function addTask(tasks, { text, theme }) {
  const newTask = {
    id: Date.now().toString(),
    title: text,
    theme: theme
  };

  return [...tasks, newTask];
}

export function deleteTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}

export function updateTask(tasks, id, { text, theme }) {
  return tasks.map(task =>
    task.id === id
      ? { ...task, title: text, theme: theme }
      : task
  );
}
