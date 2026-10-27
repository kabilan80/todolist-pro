# Todo List (React + Vite + React Bootstrap)

A todo app that is styled **only with React Bootstrap** (components and Bootstrap classes). There are no custom CSS files, no `<style>` tags and no inline styles. `App.css` and `index.css` are kept in the project but are intentionally empty and not imported.

Tasks live only in React state, so they reset when the page is refreshed.

## Run

Needs Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

## Files in `src`

| File | What it does |
| --- | --- |
| `main.jsx` | Starts React and loads the Bootstrap styles |
| `App.jsx` | The page background and the todo card position |
| `todolist.jsx` | Holds all tasks, filters, counters, edit / delete / checkbox logic |
| `input.jsx` | The "What needs to be done?" box and the + button |
| `activetask.jsx` | List shown for **Active Tasks** |
| `completedtask.jsx` | List shown for **Completed Tasks** |
| `App.css`, `index.css` | Kept, but empty (no custom CSS is used) |

## Features

- Add a task with + or Enter (empty tasks are ignored)
- Tick / untick to complete or re-activate a task
- Edit and delete tasks
- All / Active / Completed filters with live counters
- "No tasks here." when a list is empty
