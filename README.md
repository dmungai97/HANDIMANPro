# HANDIMANPro

HANDIMANPro is a MERN Stack based web app a sub-branch of forked `job-portal-main` with changes and  bugs fixed which helps in streamlining the flow of job application process. It allows users to select there roles (handyman/client), and create an account. In this web app, login session are persistent and REST APIs are securely protected by JWT token verification. After logging in, a client can create/delete/update jobs, shortlist/accept/reject applications, view resume and edit profile. And, an handyman can view jobs, perform fuzzy search with various filters, apply for jobs with an SOP, view applications, upload profile picture, upload resume and edit profile. Hence, it is an all in one solution for a job application system.


Directory structure of the web app is as follows:

```
- backend/
    - public/
        - profile/
        - resume/
- frontend/
- README.md
```

## Instructions for initializing web app:

- Install Node JS, MongoDB in the machine.
- Start MongoDB server: `Services.msc then Start MongoDB Server`
- Move inside backend directory: `cd backend`
- Install dependencies in backend directory: `npm install`
- Start express server: `npm start`
- Backend server will start on port 4444.
- Now go inside frontend directory: `cd ..\frontend`
- Install dependencies in frontend directory: `npm install`
- Start web app's frontend server: `npm start`
- Frontend server will start on port 3000.
- Now open `http://localhost:3000/` and proceed creating jobs and applications by signing up in required categories.

## Dependencies:

- Frontend
  - @material-ui/core
  - @material-ui/icons
  - @material-ui/lab
  - axios
  - material-ui-chip-input
  - react-phone-input-2
- Backend
  - bcrypt
  - body-parser
  - connect-flash
  - connect-mongo
  - cors
  - crypto
  - express
  - express-session
  - jsonwebtoken
  - mongoose
  - mongoose-type-email
  - multer
  - passport
  - passport-jwt
  - passport-local
  - uuid

# Machine Specifications

Details of the machine on which the webapp was tested:

- Operating System: Windows 10
- Terminal: Windows Power Shell
- Intel(R) Core(TM) i5-4210U CPU @ 1.70GHz   2.40 GHz
- RAM: 8 GB

`Handymans profile`
![Screenshot (81)](https://user-images.githubusercontent.com/64370903/208755668-9943e8d5-4ac9-4e0f-9ab0-2c05e18d2106.png)

![Screenshot (82)](https://user-images.githubusercontent.com/64370903/208757298-99750324-4c3f-43c6-a99b-8aa713a393a3.png)

![Screenshot (80)](https://user-images.githubusercontent.com/64370903/208755675-77f536b7-2313-4a95-a0e2-c0d81ac674e0.png)
