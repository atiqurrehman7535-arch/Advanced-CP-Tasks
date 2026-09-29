# Advanced-CP-Tasks
 Advanced Client-side Programming (React Tasks) This directory contains individual solutions for each of the three assigned React tasks. Each task is implemented in its own separate file with clean, modern, and idiomatic React code, inline styling, and full documentation.



 
Week 3/
├── Task1.jsx       # Task 1: Reusable Component with Props (ProductCard)
├── Task2.jsx       # Task 2: State & Event Handling (LikeButton with useState)
├── Task3.jsx       # Task 3: List Rendering & Conditional Rendering (Pass/Fail)
├── index.html      # Interactive browser preview demo for all tasks
└── README.md       # Documentation and summary

Task Descriptions & Implementations
Task 1: Reusable Component with Props (Task1.jsx)
Component: ProductCard
Props Accepted:
title (string): Product name
price (number|string): Product price
category (string): Product category
Key Concepts:
Functional component declaration
Object destructuring of props
Styled box layout using inline styles
Component reusability in App, passing two distinct product data objects:
Sony WH-1000XM5 Wireless Headphones ($399.99, Electronics)
Ergonomic Lumbar Office Desk Chair ($249.50, Furnitur)


Task 2: State & Event Handling with useState (Task2.jsx)
Component: LikeButton
Hook Used: useState
Key Concepts:
const [likes, setLikes] = useState(0) to track like count
Event handler onClick={handleLike}
Functional state updater setLikes(prev => prev + 1) ensuring concurrency accuracy
Dynamic count display on screen
Reset action button when count > 0



Task 3: List Rendering & Conditional Rendering (Task3.jsx)
Component: StudentList
Data: Array of student objects with id, name, and score
Key Concepts:
Dynamic array rendering using students.map(...)
React's key attribute (key={student.id}) for efficient reconciliation
Conditional rendering:
score >= 50: displays a Pass badge in green text (#16a34a)
score < 50: displays a Fail badge in red text (#dc2626)

How to Run / Preview


Option 1: Direct Browser Preview (Instant)
Simply double-click index.html or open it in your browser. It uses React 18 and Babel from CDN to run all three tasks interactively with tab switching.


Option 2: In a React Project (Vite / CRA / Next.js)

You can directly import any task into your React project:

import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';

