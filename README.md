React Multi‑Counter App

A simple, responsive React application that lets users create **named counters** with a **custom increment step** (e.g., 1, 5, 10). Each counter supports **increment**, **decrement (non‑negative)**, **reset**, and **delete**. Built to demonstrate React fundamentals: functional components, props, lifted state, controlled forms, and list rendering.

> This project is aligned with the "React Multi‑Counter Project" rubric (modules 047–053). See **Rubric Alignment** below.

---

 Features

* Create counters with a name and custom step
* Increment / decrement (never below 0), reset, and delete per card
* Clean parent→child data flow via props
* Fully controlled form with validation (required name, step ≥ 1)
* Responsive layout using Tailwind utility classes

---

 Tech 

* **React (Functional Components + Hooks)
* **Vite (dev server & build)
* **Tailwind‑style utility classes (via minimal utility classes in CSS / Tailwind equivalents)

-Prerequisites

* Node.js (LTS recommended)

Installation

```bash
# install dependencies
npm install

# start dev server
npm run dev


```

Open the dev server URL printed in your terminal (usually [http://localhost:5173](http://localhost:5173)).

---

##  Project Structure

```
src/
├─ App.jsx                 # App state & handlers; renders form & counters
├─ index.css               # Base styles / theme
└─ components/
   ├─ CounterForm.jsx      # Controlled form (name, increment)
   ├─ Counters.jsx         # Renders a list of CounterCard items
   ├─ CounterCard.jsx      # Single counter card with controls
   └─ CounterLabel.jsx     # Displays name & current value
```

---

 How It Works

State lives in `App.jsx` as an array: `{ id, name, value, increment }[]`.
Handlers in `App.jsx` update state immutably (`map`, `filter`, spreads).
* **Props** pass state & callbacks down:
 `App → Counters → CounterCard`
  `App → CounterForm` (for adding new counters)
* **Validation**: the form requires a non‑empty name and a positive increment (min=1).
* **Non‑negative decrement**: `value` will not go below `0`.

---

 Key Components

### `App.jsx`
* localStorage Holding the counters,

* Holds `counters` state and declares handlers: `addCounter`, `incrementById`, `decrementById`, `resetById`, `deleteCardById`.
* Renders `<CounterForm />` and `<Counters />`.

### `CounterForm.jsx`

* Controlled inputs for `name` (text) and `increment` (number).
* Calls `addCounter({ name, increment })` on submit, then resets the form.

### `Counters.jsx`

* Renders empty state when there are no counters.
* Maps `counters` to `<CounterCard />` with a responsive grid.

### `CounterCard.jsx`

* Shows `name`, `value`, `increment` step.
* Buttons for `+`, `–`, `Reset`, and `Delete`.
* *UX detail:* Delete button uses `ml-auto` to separate it from action group.

---

##  Rubric Alignment (Summary)

* **React Components & JSX**: Functional components; reusable `CounterCard` & `CounterLabel`.
* **Props & Data Flow**: Unidirectional flow; destructured props.
* **State Management**: `useState`; array of counter objects; immutable updates; lifted state.
* **Events & Interaction**: onClick handlers; onChange handlers; `preventDefault()` on form.
* **Form Control**: Controlled inputs; reset after submit; basic validation.
* **Lists & Dynamic Rendering**: `.map()` with stable `key`; empty state message.
* **Conditional Rendering**: Empty state and rendering logic based on data.

