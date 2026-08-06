# Week4

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.3.

# Week 4 Workshop - Angular Routing & Login

## Overview

This shows the basics of building a multi-page Angular application using different components and Angular Router. The application contains three pages:

* **Home** – A welcome page with a button to navigate to the login page.
* **Login** – A login form that validates user credentials against a hardcoded list of users.
* **Profile** – A simple profile page displayed after a successful login.

The application also includes a navigation bar that allows users to move between pages.

---

## Features

* Standalone Angular components
* Angular Router navigation
* Two-way data binding with `ngModel`
* Simple login validation
* Conditional error messages using `*ngIf`
* Bootstrap styling
* Unit test files generated for each component

---

## Project Structure

```
src/app
│
├── home/
│   ├── home.ts
│   ├── home.html
│   ├── home.css
│   └── home.spec.ts
│
├── login/
│   ├── login.ts
│   ├── login.html
│   ├── login.css
│   └── login.spec.ts
│
├── profile/
│   ├── profile.ts
│   ├── profile.html
│   ├── profile.css
│   └── profile.spec.ts
│
├── app.ts
├── app.html
├── app.routes.ts
├── app.config.ts
└── app.spec.ts
```

---

# Components

## Home Component

The Home page displays a welcome message and provides a button that navigates the user to the Login page using Angular routing.

### Functions

* Displays a welcome message.
* Uses `routerLink` to navigate to `/login`.

---

## Login Component

The Login page contains a form where users enter an email and password.

The entered values are bound using Angular's `ngModel`.

When the **Login** button is clicked:

* The application checks the entered credentials against a hardcoded array of users.
* If the credentials are correct:

  * The error message is cleared.
  * The user is redirected to the Profile page.
* If the credentials are incorrect:

  * An error message is displayed.

### Test Users

| Email                                   | Password |
| --------------------------------------- | -------- |
| [admin@test.com](mailto:admin@test.com) | admin123 |
| [sunny@test.com](mailto:sunny@test.com) | 501iv4n. |
| [test@test.com](mailto:test@test.com)   | testingg |

---

## Profile Component

The Profile page displays a simple heading and placeholder profile image after successful login.

---

# Routing

The application uses Angular Router to navigate between pages.

| Route      | Component |
| ---------- | --------- |
| `/`        | Home      |
| `/login`   | Login     |
| `/profile` | Profile   |

---

# Commands Used

## 1. Create the Angular Application

```bash
ng new week4
```

---

## 2. Install Dependencies

Install project dependencies:

```bash
npm install
```

Install Bootstrap:

```bash
npm install bootstrap
```

---

## 3. Generate New Components

Generate standalone components:

```bash
ng generate component home --standalone
```

```bash
ng generate component login --standalone
```

```bash
ng generate component profile --standalone
```

---

## 4. Serve the Application

Start the Angular development server:

```bash
ng serve
```

Then open:

```
http://localhost:4200
```

---

# Technologies Used

* Angular
* TypeScript
* Angular Router
* Angular Forms (`FormsModule`)
* Bootstrap 5
* HTML
* CSS

---
