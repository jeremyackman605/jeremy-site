import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 text-sm px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
  )
}
