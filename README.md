# ConnectVerse: Comprehensive CMS for Connecting People

Welcome to ConnectVerse, a full-stack platform and comprehensive Content Management System (CMS) designed to connect people through shared ideas and experiences. This project provides powerful tools for creating, updating, and managing content. Users can post their thoughts, images, and experiences across various categories, while admins can efficiently manage user details and content. Built with modern technologies, ConnectVerse is your gateway to a universe of efficient content management and user engagement.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Pages and Components](#pages-and-components)
- [State Management](#state-management)
- [Deployment](#deployment)

## Overview

ConnectVerse is a full-stack application that functions as a comprehensive Content Management System (CMS). It allows users to create, update, and delete posts, manage user profiles, and interact with the community. The platform includes a frontend built with React and Tailwind CSS, and a backend powered by Node.js and Express, with MongoDB as the database

## Features

- User Authentication: Sign up, Sign in, and Google Authentication
- User Profile Management: Update profile, upload profile picture, and manage user settings.
- Content Management: Create, update, delete, and view posts with images and categorized content.
- Admin Functionality: Manage users and posts with admin privileges.
- User Listing: View a list of all users and their details.
- Post Listing: Browse and manage posts.
- Responsive Design: Seamless experience across all devices.
- Real-time Updates: Live interaction updates and notifications.


## Technologies Used

## FrontEnd:
 
  - [React](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - [React Router](https://v5.reactrouter.com/web/guides/quick-start)

 ## BackEnd:

  - [Node.js](https://nodejs.org/docs/latest/api/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/try/download/community)

## Setup and Installation

# Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

# Installation
1. **Clone the repository:**

   ```bash
   git clone https://github.com/nihalmmuneer/connect-verse.git
   cd connect-verse

2. **Install Backend dependencies:**
    ```bash
    npm install

3. **Install Frontend dependencies:**
    ```bash
    cd client
    npm install

4. **Create a .env file in the root directory and add the following::**
    ```bash
    MONGO=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

5. **Create a .env file in the client directory and add the following::**
    ```bash
    VITE_API_TOKEN= your_firebase_token 

6. **Run the development server:**
   ```bash
   npm run dev

## Usage
Navigate through the platform to explore various features such as creating posts, managing your profile, and interacting with other users. The admin dashboard offers functionalities to manage the platform's users and content efficiently.


## API Routes
- User Routes:
  - POST /api/auth/signup
  - POST /api/auth/signin
  - GET /api/user
  - PUT /api/user/
  - DELETE /api/user/

- Post Routes:
   - GET /api/post
   - POST /api/post
   - PUT /api/post/
   - DELETE /api/post/
 
## CRUD Operations
  ConnectVerse supports the full range of CRUD (Create, Read, Update, Delete) operations:
   - Create: Users can create new posts and user profiles.
   - Read: Users can view posts and profiles. Admins can list all users.
   - Update: Users can update their own profiles and posts. Admins can update user roles and post statuses.
   - Delete: Users can delete their own posts and profiles. Admins can delete any user or post.
          
## Pages and Components
  - Pages:
     - Home ![Sign-In HomePage](https://github.com/nihalmmuneer/connect-verse/assets/83130635/61afc65f-f6b4-41ec-85a6-4824739a3eec)
     - SignUp ![image](https://github.com/nihalmmuneer/connect-verse/assets/83130635/0737cfc0-da7a-4c73-b36d-f148cdb1ce09)
     - SignIn ![image](https://github.com/nihalmmuneer/connect-verse/assets/83130635/52f442f7-08ae-40f1-b8c4-196dc3dcaad6)
     - About
     - Dashboard 
     - CreatePost ![CreatePost](https://github.com/nihalmmuneer/connect-verse/assets/83130635/2f25f2c0-3ec0-45dd-bd97-35a209cd21b6)
     - PostPage
     - UpdatePost
     - Search![image](https://github.com/nihalmmuneer/connect-verse/assets/83130635/c12317c1-eefe-448a-b89f-a7d07435b280)
     - Project
       
 - Components:
      - Header
      - Footer
      - DashSidebar ![Dashboard](https://github.com/nihalmmuneer/connect-verse/assets/83130635/48a1acee-5c0f-4305-bdfe-b6194d85a629)
      - DashPosts  ![image](https://github.com/nihalmmuneer/connect-verse/assets/83130635/ea01b0a3-0b72-42ce-be7b-7e6824ee9b5c)
      - DashProfile- ![image](https://github.com/nihalmmuneer/connect-verse/assets/83130635/c6056e2e-6456-48ea-b939-207281205f3a)
      - DashUsers ![image](https://github.com/nihalmmuneer/connect-verse/assets/83130635/b13254a7-08e7-45cc-8d1b-c6c00795eb49)
      - PostCard ![image](https://github.com/nihalmmuneer/connect-verse/assets/83130635/056f4b10-0a1b-45ac-bf51-3cb1c9291bf0)

## State Management
State management is handled using Redux Toolkit and Redux Persist for maintaining state across sessions.

## Deployment
This application is deployed on Vercel. You can access the live version [here](https://connect-verse-xchk.onrender.com)
- Github repository [click here](https://github.com/nihalmmuneer/connect-verse)
- Deployment has been done in [Render](https://render.com/)
