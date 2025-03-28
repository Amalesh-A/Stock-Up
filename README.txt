Phase I: Initiation

Landing Page + User Authentication (React + MySQL via Spring Boot)
Stack for this step:
    React: Frontend UI (Landing + Login/Signup)
    Spring Boot: Backend for authentication
    MySQL: Stores user credentials
    JWT: For user session management (React stores token)

    Goal: Lay a clean foundation — environment, tools, folder structure.

 Backend (Spring Boot):
    Scaffold project using Spring Initializr
    Dependencies:
        Spring Web
        Spring Security
        Spring Data JPA
        MySQL Driver
        JWT (e.g., jjwt)
    Base folder structure:
        /src/main/java/com/stockagent/
            ├── config/
            ├── controller/
            ├── model/
            ├── repository/
            ├── service/
            └── security/

Frontend (React + Tailwind)
    Use Vite (lightweight and fast):
        npm create vite@latest stock-agent -- --template react
    
    Install:
        npm install react-router-dom axios
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p

    Folder structure:
        /src/
            ├── components/
            ├── pages/
            ├── services/
            ├── hooks/
            └── context/

Outcome: A clean, working boilerplate on both ends. GitHub repo is set. CI setup (optional).

![Architecture Diagram](./assets/Initial%20Plan.png)
