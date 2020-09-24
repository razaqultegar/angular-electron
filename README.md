<div align="center"><img src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg" alt="Angular Logo" width="150"> <img src="https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg" alt="Electron Logo" width="150"><br><br>

![Maintained][maintained-badge]
[![Travis Build Status][build-badge]][build]
[![Make a pull request][prs-badge]][prs]
[![License](http://img.shields.io/badge/Licence-MIT-brightgreen.svg)](LICENSE)

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]
</div>

# Introduction

Bootstrap and package your project with Angular 10 and Electron 10 for creating Desktop applications.

Currently runs with:

- Angular v10.1.12
- Electron v10.1.2

With this sample, you can :

- Run your app in a local development environment with Electron
- Run your app in a production environment

**Note: Angular 10.x CLI needs Node 10.13 or later to work correctly.**

## Getting Started

Clone this repository locally :

``` bash
git clone https://github.com/razaqultegar/angular-electron.git
```

Install dependencies with npm :

``` bash
npm install
```

There is an issue with `yarn` and `node_modules` when the application is built by the packager. Please use `npm` as dependencies manager.


If you want to generate Angular components with Angular-cli , you **MUST** install `@angular/cli` in npm global context.
Please follow [Angular-cli documentation](https://github.com/angular/angular-cli) if you had installed a previous version of `angular-cli`.

``` bash
npm install -g @angular/cli
```

[build-badge]: https://travis-ci.org/razaqultegar/angular-electron.svg?branch=master&style=style=flat-square
[build]: https://travis-ci.org/razaqultegar/angular-electron
[license-badge]: https://img.shields.io/badge/license-Apache2-blue.svg?style=style=flat-square
[license]: https://github.com/razaqultegar/angular-electron/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/razaqultegar/angular-electron.svg?style=social
[github-watch]: https://github.com/razaqultegar/angular-electron/watchers
[github-star-badge]: https://img.shields.io/github/stars/razaqultegar/angular-electron.svg?style=social
[github-star]: https://github.com/razaqultegar/angular-electron/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20angular-electron!%20https://github.com/razaqultegar/angular-electron%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/razaqultegar/angular-electron.svg?style=social
[maintained-badge]: https://img.shields.io/badge/maintained-yes-brightgreen