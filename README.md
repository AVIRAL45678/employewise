# EmployWise - React User Management App

**EmployWise** is a responsive React-based web application that allows user authentication, viewing, editing, and deleting users by interacting with the [Reqres API](https://reqres.in/).

## 🔑 Features

### ✅ Authentication (Login)
- Users can log in with:
  - **Email**: eve.holt@reqres.in
  - **Password**: cityslicka
- On successful login, a token is stored in localStorage.
- Users are redirected to the user listing page.

### 👤 User Management
- View all users in a **card layout** with avatar, name, and email.
- Pagination supported using Reqres' API (`/api/users?page=1`, etc.)
- **Edit User**:
  - Update name and email via a pre-filled form.
  - Send updates to Reqres using a `PUT` request.
- **Delete User**:
  - Remove user from the list with confirmation.
  - Simulate deletion using a `DELETE` request to the API.

### 🔒 Protected Routes
- Pages like User List and Edit are protected.
- Redirects to login page if no token is found in localStorage.

### 🎨 Responsive UI
- Clean, professional design with improved spacing, modern color scheme, and hover effects.
- Mobile-friendly design using responsive styles.
- Buttons are spaced properly to avoid overlap.

---

## 🧩 Technologies Used

- React (v18+)
- React Router DOM
- Axios
- Reqres API
- CSS (Custom + responsive improvements)

---

## 🚀 Getting Started

###  Clone the Repository

```bash
git clone https://github.com/your-username/employwise.git
cd employwise




   
