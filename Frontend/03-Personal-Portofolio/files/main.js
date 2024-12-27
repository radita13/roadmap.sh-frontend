function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

const sevedTheme = localStorege.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', sevedTheme);