# Personal Website

This is the personal website of Asha Camper Singh. I built it to start playing around with React when I first started becoming interested in frontend development. You can check it out [here](https://www.ashacs.me)!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You should install [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm), which can then be used to install [npm](https://www.npmjs.com). Once `nvm` is installed, you can run

```
nvm install
```

which will install a version of `npm` that is usable for this project.

### Installing

Clone the repo using HTTPS or SSH

```
git clone git@github.com:ashacs/ashacs.github.io.git

OR

git clone https://github.com/ashacs/ashacs.github.io.git
```

Navigate to the project

```
cd ~/path/to/ashacs.github.io.git
```

Then run

```
npm install
npm run build
npm run start
```

This will install all required dependencies for the project, build the project, and start the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Deployment

To deploy your changes to [The Internet](http://www.internet-band.com), run

```
npm run deploy
```

## Built With

- [Create React App](https://github.com/facebook/create-react-app) - Used to set up project structure, transpiler, bundler, React, JSX, and local development server
- [Sass](https://sass-lang.com) - Used for styling

## TODO

- [ ] Rebuild from the ground up with Typescript
- [ ] Implement SSR
