[![Netlify Status](https://api.netlify.com/api/v1/badges/0045af1c-d96f-4a7e-bffd-8deb65785b36/deploy-status)](https://app.netlify.com/sites/vue-bin/deploys) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
# VueBin
VueBin is a pastebin for Vue.js Single File Components inspired by [HasteBin](https://hastebin.com/) with Out of the box Syntax Highlighting using [Shiki](https://shiki.matsu.io/) and Code Formatting using [Prettier](https://prettier.io/). You can easily share your Vue.js SFC Code with your teammates or client by just simply sharing a simple link. It is developed using MEVN stack.

## Website link

[https://vue-bin.netlify.app/](https://vue-bin.netlify.app/)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
- Node.js, Vue CLI should be installed to run the application
- You should have Local or Cloud MongoDB set up.
### Setup
- Clone the resposity by using the following command
    
    ```bash
        > git clone https://github.com/Aizaz-Ahmad/vuebin.git
    ```
- Create a MongoDB database named `vuebin` and also a collection `codes` inside it. Replace the Connection String inside [`.env`](https://github.com/Aizaz-Ahmad/vuebin/blob/master/api/.env) with the Connection String of your MongoDB instance.
### Install
- Install the node_modules by using following commands:
    
    ```bash
        > npm install
        > cd api # Navigate to api directory
        > npm install # Install node_modules inside api directory
    ```
### Usage
- To Serve the Application locally use the following command:
    
    ```bash
        > npm run serve # To serve Vue.js CLI Application
        > cd api # Navigate to api directory
        > npm run dev # To Run Node HTTP Server
    ```    
## Author

👤 **Aizaz Ahmad**

- GitHub: [@Aizaz-Ahmad](https://github.com/Aizaz-Ahmad)
- Twitter: [@aizazahmad0](https://twitter.com/aizazahmad0)
- LinkedIn: [aizazahmad0](https://linkedin.com/in/aizazahmad0)

## 🤝 Contributions

If you have questions, feature Requests, concerns, bug reports, etc, please file an issue in this repository's [Issue Tracker](https://github.com/Aizaz-Ahmad/vuebin/issues).

Currently, Contributions related to Code Refactoring and Performance Improvements would be highly encouraged.

### Show your support

Give a ⭐️, If you find that helpful!
