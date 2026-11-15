export function addTheme(themes, text) {
  const newTheme = {
    id: Date.now().toString(),
    title: text,
    
  };

  return [...themes, newTheme];
}

export function deleteTheme(themes, id) {
  return themes.filter(theme => theme.id !== id);
}