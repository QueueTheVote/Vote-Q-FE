# VotingQ

*A mobile-first web application that aims to combat voter suppression while optimizing voting centers operating in a Covid-19 context*

**Developed as part of the Black Lives Matter Hackathon**



## Overview 

This application was developed over the course of 4 days. It is built with React and React-Bootstrap on the FrontEnd with a Scala BackEnd and PostgreSQL database. The app consumes the Google Civic Information API as well as the Google Maps API. 


The idea of the application was inspired by recent primary elections in states like Wisconsin and Georgia, which were characterized by long lines, large crowds, and lack of direction by government officials. The solution is to apply what restaurants do: establish a digital queue that notifies users their current position and estimated wait time, so they can show up to the voting center when the voting center is ready to receive them.  


In the context of the Black Lives Matter movement, the application hopes to assist voters be prepared to overcome forms of voter suppression, while also providing a means to vote safely and efficiently during the Covid-19 pandemic, two forces that have disproportiontely impacted the Black community. 



## Contributors 

Jasna Rodulfa-Blemberg - Tech Lead / BE Dev - [JasnaMRB](https://github.com/JasnaMRB)


Helen Liutongco  - FE Dev - [hliutongco](https://github.com/hliutongco)


Marjorie Etienne - Researcher / FE Dev - [Schmarj3](https://github.com/Schmarj3)


Erik Raith - FE Dev - [ERaith](https://github.com/ERaith)


James Miller - Team Lead / FE Dev - [JamesRexMiller4](https://github.com/JamesRexMiller4)


Marisa Ruiz Asari - Designer - asarm379@newschool.edu


Caitlin Johnson - Product Manager





## Application Workflow

### 1. Home Page 

![image](https://user-images.githubusercontent.com/27719824/84600656-393e3080-ae38-11ea-9ef4-9e5076b49db2.png)


When a user first opens the application they are taken to the home page, where they are prompted to enter their address or zipcode to find the closest voting centers near them. This redirects them to the a new page where they are able to view the nearest voting centers in their area for an upcoming election.

### 2. Voting Centers

![image](https://user-images.githubusercontent.com/27719824/84600767-00528b80-ae39-11ea-8601-150ed9ba2a60.png)

A list of voting centers populates once a valid address / zipcode have been submitted. The voting center displays all available information from the Google Civic Information API, which is maintained and updated regularly. Some of the information displayed include the name of the building that is operating as a voting center, the hours of operation, as well as the day of the election. 

In addition, a user is able to see what the current queue size is for each given voting center. This allows them to make an informed decision on which voting center they may want to go to in order to vote in that given election.

### 3. Voting Center detail

![image](https://user-images.githubusercontent.com/27719824/84601684-5de9d680-ae3f-11ea-8829-dc560c944324.png)


When selecting a voting center the user is able to review the details of the voting center: name, address, queue size, as well as proceed to enter into the queue by filling out the registration form.

### 4. Queue Confirmatiom

![image](https://user-images.githubusercontent.com/27719824/84601281-3d6c4d00-ae3c-11ea-9575-4916b7649e66.png)

Once a user has successfully been added to the queue they will be redirected to a confirmation page that has all the details of their appointment. They can see a embedded map (via the Google Maps API), as well as estimated time to arrival from their entered address, how many people are before them in the queue, and eta to when their turn will be up to vote.

### 5. Voter Checklist

A user can also review a checklist of important information and required documents they will need in order to have a seamless voting experience. These requirement vary by state, but in general they ought to know if they are already registered to vote in their state, have multiple forms of accepted identification, as well as a mask to protect themselve and others from possible Covid infection. 


## Tech Stack 

- React
- React-Bootstrap
- Scala
- PostgreSQL



## Future iterations 

In future iterations of this application our team hopes to incorporate a voting center portal, where voting centers will be able to manage their respective queues. We also hope to have web sockets and progressive web app functionality so that information remains up to date, while other information is cached in the event that a user does not have a stable internet connection. 

Additionally, we hope to aggregate, and embed all the available resources for voters into the application making it a one stop shop for having a seamless voting experience.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
