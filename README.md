This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Personal Website

### Description

This is a web based application built to simplify building a personal frontend website. <br />

The setup at the moment is a little tedious. However, I will try to make the process as simple as possible. After the setup, the rest will be a breeze. The end goal is to have multiple components that you the user can pick and choose to add into your website by entering a few words in the config file.

A sample of the website can be found on https://fangpinsern.github.io/PersonalResumeWebsite/

## User Guide

### 1. How to set the webpage up?

Firstly, you will need the following:

1. Github account
2. Node.js and Npm
3. Git
4. Code Editor

To get a github account, go to https://www.github.com and sign up for an account. This will allow you to have a host your site on github for free.

To install NodeJs, go to https://www.nodejs.org/en/ . This automatically comes with npm.

Git is a version control system. It helps you manage your code between the local copy on your computer and the one posted onto github where you will host your website.

For a code editor, I recommend using VSCode as I think the user interface is simple to use. And it has an inbuilt terminal which makes things easier.

After getting all the required softwares set up, clone this code onto your local machine.

TBC.

### 2. How to use the page?

This web app is built to make it easy to customize to your personal information. Anything you need in a resume should be available in the config files. (I am still in the beginning stages of this. Hence there are few options.) If you feel there is anyway to improve or would like to add any other information, fell free to let me know.

To add your personal information:

- Go to the src folder and within it there is a config folder.
- There are a few config files that you are able to access. (For now, you can config the homepage, aboutpage, contact page and the navbar.)
- These config files allow you to change majority of the text and links to the different buttons.
- To find out what the different keys are linked to, just play around with it and see what changes.
- Documentation will be uploaded soon. haha

To change the images:

- Go to the src folder and within it there is a images folder.
- For now, you are required to put in the images with the exact same name for the images to apppear. I am working on a future update so you could upload your own images with to make things easier.
- For example, to change the image in the first square of the home page, you will have to add an image with the name "square1Image.jpg".
- The file extenstion has to be jpg.
- It is recommended not to put too many images in this folder as it may hurt the performance of the website.

If you know a little about HTML or CSS, you can customize it even further by changing other parts of the pages that is currently not supported.

To see changes locally before uploading:

- Before pushing the code, you may want to check if it is what you intended to do.
- To do so, open the terminal (mac/linux)/command prompt(Windows) and navigate to the folder that has the src folder. If you use VSCode, just open a new terminal by pressing "Terminal" on the title bar and click new terminal.
- Run the command npm start
- The page should automatically start on the a new browser window.

Disclaimer: All images used in this repo are sample images. If you would like it taken down, please contact me.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
