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
npm run dev
```

This will install all required dependencies for the project, build the project, and start the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

Github pages is used for hosting, and it can be updated by running

```
npm run deploy
```

## Built With

- [NextJS](https://nextjs.org/)
