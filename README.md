# Serverless Library Application (WeBooks)

## 🎯 Purpose
This project focused on building a library application for ABCBooks using a cloud serverless architecture. The goal was to create a simple and efficient web application where users can view, add, edit, and delete books from a central database while ensuring secure user authentication.

## 🛠️ Technologies
- **Language:** Python (Lambda Functions), JavaScript (Next.js)
- **Frameworks:** Next.js (React Framework)
- **Cloud:** AWS (Lambda, API Gateway, DynamoDB, S3, Cognito)

## 🚀 Key Features
- **Serverless Architecture:** The application runs without managing traditional servers, utilizing AWS Lambda to scale automatically.
- **Secure Authentication:** Integrated with Amazon Cognito to provide user sign-up, sign-in, and access control.
- **Responsive Frontend:** Built using Next.js for a fast user experience and hosted on an AWS S3 bucket.
- **RESTful API:** Amazon API Gateway manages HTTP requests (GET, POST, PUT, DELETE) to communicate securely with the backend.

## 📂 Project Structure
~~~text
/frontend (Next.js)
  ├── /pages          # Interfaces for viewing, adding, and editing books
  ├── /styles         # CSS modules for responsive design
  └── index.js        # Main entry point

/backend (AWS Lambda)
  ├── getBooksFunction    # Retrieves all books from DynamoDB
  ├── addBookFunction     # Adds a new book to the database
  ├── updateBookFunction  # Updates existing book details
  └── deleteBookFunction  # Deletes a book from the database
~~~

## 🔧 Setup & Installation
~~~bash
# Clone the repository
git clone https://github.com/MalanSathya/webooks.git

# Install Frontend Dependencies
cd frontend
npm install

# Backend Deployment (Manual Steps)
# 1. Create DynamoDB table 'library-books' with attributes: title, author, genre.
# 2. Deploy Python Lambda functions for CRUD operations.
# 3. Configure API Gateway to trigger Lambdas using HTTP methods.

# Run Frontend Locally
npm run dev
~~~

## 📊 Results
- **Successful Deployment:** The team successfully built and deployed a fully functional serverless application that is efficient and secure.
- **Skill Development:** Gained hands-on experience connecting a Next.js frontend with AWS services like Lambda, DynamoDB, and API Gateway.
- **Team Collaboration:** Enhanced understanding of communication and planning required to troubleshoot and build real-world cloud projects.

## 🔗 Related Projects
- [Project Source Code](https://github.com/MalanSathya/webooks.git)
