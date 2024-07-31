# Netflix App Clone 

Overview

The project is a Netflix App clone designed to replicate the essential functionalities of Netflix, allowing users to browse, search, and manage their list of movies and TV shows. The application leverages modern web technologies to deliver a seamless and responsive user experience across different platforms.


<img width="303" alt="Screenshot 2024-07-31 at 4 31 56 PM" src="https://github.com/user-attachments/assets/5285c85b-9600-47e7-9747-6242d9b52837">
<img width="303" alt="Screenshot 2024-07-31 at 4 37 09 PM" src="https://github.com/user-attachments/assets/2eec54a8-f131-479e-a876-309c3cf1a534">
<img width="303" alt="Screenshot 2024-07-31 at 4 29 40 PM" src="https://github.com/user-attachments/assets/b4533fae-df23-4458-8a87-7bbf018d6f14">
<img width="303" alt="Screenshot 2024-07-31 at 4 31 01 PM" src="https://github.com/user-attachments/assets/438dbf3f-d43a-4a10-8de5-d0ac6013b044">
<img width="303" alt="Screenshot 2024-07-31 at 4 31 06 PM" src="https://github.com/user-attachments/assets/85235a6c-6030-4594-8055-b4ccc4d3960a">
<img width="303" alt="Screenshot 2024-07-31 at 4 31 35 PM" src="https://github.com/user-attachments/assets/677087eb-72e4-48b1-ae5b-98bc1862a4e2">

## Key Features

**User Authentication:**
Implemented with Firebase Authentication to provide secure sign-in and sign-up functionalities.
Includes email/password authentication and social login options.

**Movie and TV Show Browsing:**
Users can browse through a wide range of movies and TV shows, categorized by genres.
Detailed views for each movie/TV show including descriptions, ratings, and trailers.

**Search Functionality:**
A robust search feature allowing users to find specific movies or TV shows.
Real-time search results with filtering options.

**User Account Management:**
Users can create and manage their accounts.
Includes profile management and preference settings.

**My List:**
Users can add movies and TV shows to their personal list for easy access and future viewing.

**Responsive Design:**
Built with responsive design principles to ensure usability on various devices including desktops, tablets, and smartphones.

## Technologies Used

**Frontend:**

**React Native:** The core framework used for building the user interface.

**Expo:** Managed workflow to streamline the development and deployment process.

**TailwindCSS:** For styling the components with utility-first CSS framework.

**Axios:** For making HTTP requests to fetch data from the API.

**React Navigation:** For navigation and routing within the app.


## Backend:

<img width="1378" alt="Screenshot 2024-07-31 at 5 08 06 PM" src="https://github.com/user-attachments/assets/b6033faf-fddf-4dc2-a1f7-a7c5a77a4c95">


**Firebase:** Used for authentication, real-time database, and cloud storage.

**API Integration:** Integration with external APIs to fetch movie and TV show data.

**State Management:**
**Context API:** For managing global state across the application.

## Validation:

**Yup and Formik:** For form validation and handling form state.

## Authentication:

**auth.tsx:** Handles the authentication logic including sign-in and sign-up processes.login-account.tsx and create-account.tsx: UI components for login and account creation.

**Layout:**
_layout.tsx: The main layout component that wraps around the application components to provide a consistent layout.

**Modal:**
modal.tsx: A reusable modal component used across the application for various purposes such as alerts and confirmations.

**Account Management:**
account.tsx: Manages user account details and settings.

**Content Browsing:**
index.tsx: The main entry point and home page of the application.movies.tsx and tv.tsx: Components for displaying movie and TV show listings. search.tsx: Implements the search functionality.

**Theming:** Themed.tsx: Handles theming and styling of the application components.

**My List:** my-list.tsx: Component for managing and displaying the user's personal list of favorite movies and TV shows.

**API Integration:** api.ts: Contains the logic for interacting with external APIs to fetch content data.

**Type Definitions:** index.d.ts: TypeScript definitions to ensure type safety throughout the application.

**Configuration:** package.json: Contains the project configuration, dependencies, and scripts for building and running the application.

























## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

can open this project in all devices 

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go),


