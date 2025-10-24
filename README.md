# Contact List Manager

A modern, responsive contact management application built with React and Tailwind CSS. This project demonstrates CRUD operations, local storage integration, and clean component architecture.

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Learnings](#key-learnings)
- [Future Enhancements](#future-enhancements)

## About The Project

This Contact List Manager is a single-page application that allows users to manage their contacts efficiently. The application provides a clean, intuitive interface for adding, viewing, and searching contacts with data persistence using browser's localStorage.

### Why This Project?

- To demonstrate proficiency in React hooks (useState, useEffect)
- To implement real-world features like search, pagination, and modal management
- To showcase clean code organization and component separation
- To practice responsive design with Tailwind CSS

##  Features

### Core Functionality
- **Add Contacts**: Create new contacts with name, phone, and email validation
- **View Contact Details**: Click any contact row to view detailed information in a modal
- **Search Contacts**: Real-time search across name, phone, and email fields
- **Pagination**: Display 10 contacts per page with easy navigation
- **Data Persistence**: All contacts are saved in localStorage and persist across sessions

### User Experience
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Hover Effects**: Interactive table rows with smooth transitions
- **Toast Notifications**: Real-time feedback for user actions (success/error messages)
- **Clean UI**: Modern gradient styling with alternating row colors

## Tech Stack

**Frontend Framework:**
- React

**Styling:**
- Tailwind CSS - Utility-first CSS framework for rapid UI development

**Icons:**
- Lucide React - Beautiful, consistent icon library

**Notifications:**
- React Hot Toast - Lightweight toast notification library

**Storage:**
- Browser localStorage API - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
- git clone https://github.com/NikhilPatel32/tria_assignment.git
- cd frontend

2. Install dependencies
- npm install

3. Install required packages
- npm install lucide-react react-hot-toast


4. Start the development server
- npm run dev


5. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

##  Project Structure
```
src/
├── components/
│ ├── AddContactModal.jsx # Modal component for adding new contacts
│ └── ViewContactModal.jsx # Modal component for viewing contact details
├── pages/
│ └── Home.jsx # Main page component with table and logic
├── data/
│ └── contact.js # Initial contact data
├── App.jsx # Root component with Toaster setup
└── main.jsx # Entry point
```

### Component Breakdown

**Home.jsx (Main Component)**
- Manages all state (contacts, search, pagination, modals)
- Handles localStorage operations (load/save)
- Implements search filtering and pagination logic
- Renders table with contact list
- Controls modal visibility

**AddContactModal.jsx**
- Reusable form component for adding contacts
- Input validation (10-digit phone, email format)
- Props-based state management
- Integrates with toast notifications

**ViewContactModal.jsx**
- Displays detailed contact information
- Clean, card-based layout with icons
- Receives contact data via props

##  Key Learnings

### 1. State Management
- Used multiple useState hooks to manage different pieces of state
- Implemented controlled components for form inputs
- Managed complex state updates with localStorage synchronization

### 2. React Hooks
- **useEffect**: Loaded data from localStorage on component mount
- **useEffect**: Reset pagination when search query changes
- **useState**: Managed modals, forms, and data arrays

### 3. Component Architecture
- Separated concerns by creating reusable modal components
- Followed single responsibility principle

### 4. localStorage Integration

```
// Save to localStorage
localStorage.setItem("contacts", JSON.stringify(updatedContacts));

// Load from localStorage
const savedContacts = localStorage.getItem("contacts");
if (savedContacts) {
setContacts(JSON.parse(savedContacts));
}
```

### 5. Search Implementation
- Case-insensitive search using `toLowerCase()`
- Multi-field search (name, phone, email)
- Real-time filtering with instant results

### 6. Pagination Logic
```
const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);
const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const endIndex = startIndex + ITEMS_PER_PAGE;
const currentContacts = filteredContacts.slice(startIndex, endIndex);
```

### 7. Toast Notifications
- Simple integration: Import toast, add Toaster component, call toast.success()/toast.error()
- Provides instant user feedback for actions
- Lightweight alternative to building custom notification system

## Design Decisions

1. **Tailwind CSS**: Chosen for rapid development and easy responsive design
2. **Component Separation**: Modals separated for reusability and maintainability
3. **localStorage**: Simple client-side storage suitable for small applications
4. **React Hot Toast**: Lightweight (5kb) and provides great UX with minimal setup
5. **Lucide Icons**: Consistent, modern icon set with tree-shaking support

## Responsive Features

- Flexbox layout adjusts from column (mobile) to row (desktop)
- Table with horizontal scroll on small screens
- Responsive text sizes (text-sm to text-base)
- Touch-friendly button and input sizes
- Max-width containers prevent excessive stretching on large screens

## Future Enhancements

- [ ] Edit contact functionality
- [ ] Delete contact with confirmation
- [ ] Export contacts to CSV
- [ ] Import contacts from file
- [ ] Contact categories/groups
- [ ] Favorite/starred contacts
- [ ] Dark mode toggle
- [ ] Backend integration with database
- [ ] Contact photo upload
- [ ] Advanced search filters

## Demo
**[Try Live Demo](https://tria-assignment-coral.vercel.app/)**




