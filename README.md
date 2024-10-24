# To-Do List App

This is a simple React-based To-Do List application that allows users to manage their tasks while being inspired by random quotes. Whenever a new task is added, a motivational or thoughtful quote is displayed, fetched from the Quotable API.

## Features
- Add tasks to your to-do list.
- Delete tasks from the list.
- Receive a random quote when a task is added.

## Technologies Used
- **React**: For building the user interface.
- **CSS**: For styling the application.
- **Quotable API**: To fetch random motivational quotes.

## Setup Instructions:
### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app
   ```
2. **Install dependencies**: Ensure that you have Node.js installed, then run:
 ```bash
   npm install
```
3. **Run the app**: Start the development server by running:
```bash
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## File Structure
* App.js: The main component that manages tasks and quotes. It includes:
  - Task addition and deletion functionality.
  - Integration with the Quotable API to fetch random quotes.
* App.css: Basic styling for the app, including the layout of the task list, input section, and buttons.

## How to Use
- Type your task in the input box and click the "Add Task" button.
- A random quote will be displayed every time you add a new task.
- You can delete tasks by clicking the "Delete" button next to each task.

## API Information
Quotable API: A free API to fetch random quotes. More information can be found at Quotable.io.
 * note: An API key is not needed to access the Quotable API. The API I am using is publicly accessible and does not require authentication, meaning no API key is needed for fetching quotes.

## Acknowledgments

I would like to thank ChatGPT for helping me brainstorm ideas and learn React throughout the development of this project. Instead of relying solely on Google searches, I used ChatGPT to clarify concepts, troubleshoot issues, and explore different approaches in building this app since it is my first time learning react. 

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

