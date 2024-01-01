# Strivefy

![banner](https://github.com/G-V-Utong/strivefy/blob/main/client/public/images/Main%20logo.PNG)

[![license](https://img.shields.io/github/license/G-V-Utong/strivefy.svg)](LICENSE)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Description

Strivefy is a robust task management application meticulously crafted with ReactJs for the client-side, MongoDB as the database, and Node.js along with Express for the server-side. This powerful synergy of cutting-edge technologies ensures a seamless and responsive user experience.

## Instructions for contributing to this project

- Fork this repository
- Clone your forked repository
- Add your scripts
- Commit and push
- Create a pull request
- Star this repository
- Wait for pull request to merge

## Table of Contents

- [Background](#background)
- [Author](#author)
- [Architecture](#architecture)
- [Models](#models)
- [Infrastructure](#infrastructure)
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Background

### Overview
Strivefy is a robust and intuitive task management application designed to streamline productivity and enhance collaboration. Tailored for individuals, Strivefy provides a seamless and efficient solution for organizing tasks, and achieving goals.

With a user-centric approach, Strivefy prioritizes simplicity without compromising functionality. The application empowers users to effortlessly create, assign, and track tasks, fostering a clear and structured workflow. Key features include a dynamic task dashboard, customizable priority settings, real-time collaboration tools, and insightful progress tracking. Strivefy leverages technologies, including NextJs, ReactJs, and Redux, to deliver a responsive and seamless user experience across web and mobile platforms.

### Motivation
The primary motivations or choosing this project were to finally master combining backend and frontend technology to create a functional application, and to be able to master CRUD functionalities. The task management application was the easiest project to achieve these two goals.

### Target Audience
The application is targeted at solo users who want to simply organize their tasks and have them in one place. It comes with a dashboard that tracks tasks and give users real-time information about their progress.

### Technology Stack
#### Front-end
- Libraries: React
- Languages: HTML, CSS (SCSS), JavaScript
- Platforms: Web browsers (Chrome, Firefox, etc.)
- Frameworks: React
- State Management library: Redux
#### Back-End
- Language: JavaScript
- Runtime Environment: NodeJs
- Framework: ExpressJs
#### Database
- MongoDB
- library: Mongoose

## Author 
- Godswill Utong [LinkedIn](https://www.linkedin.com/in/godswill-utong-acifc-acib-10252915b) 

## Architecture 
![architecture](https://github.com/G-V-Utong/strivefy/blob/main/client/public/images/Simple%20architecture.PNG)

Users can communicate with the task management application by using its REST APIs. The client-side is able to communicate with the server-side due to Cross-origin Resource Sharing (CORS). When a user makes a request (sign up, sign in, add a task etc), information is dispatched to the server by Redux Dispatch.

## Models
![Models](https://github.com/G-V-Utong/strivefy/blob/main/client/public/images/Models.PNG)

The database has two models: user and task, with a one-to-many relationship.

## Infrastructure

- Branching and Merging: Use the GitHub flow for version control and collaboration among team members.
- Deployment Strategy: With CI/CD to deploy the frontend and backend on GitHub Pages/ Netlify or Vercel.
- Data Population: Integrate a database for persistent storage with Node.js MongoDB.
- Testing: Implement Node.js unit testing for backend functionality and manual testing for the frontend user interface.

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```
```

## Usage

```sh
$ npm start <command> 
or 
$ yarn <command>
```

## Contributing

PRs accepted.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT © Godswill Utong.](../LICENSE)
