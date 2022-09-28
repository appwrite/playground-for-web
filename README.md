# Appwrite's Web Playground 🎮

Appwrite playground is a simple way to explore the Appwrite API & Web SDK. Use the source code of this page to learn how to use the different Appwrite Web SDK features.

![Appwrite Playground](preview.png)

## Appwrite Install
If you have never setup Appwrite locally before there are a few steps.

- You must have [Docker](https://docs.docker.com/engine/install/) installed.
- Run docker compose command from the [Appwrite Installation Docs](https://appwrite.io/docs/installation).
- Reference the [Appwrite 101 - YouTube Playlist](https://youtu.be/aO4mw8smXkI)
- If you are running a remote Appwrite instance change `http://localhost/v1` in the [configuration](https://github.com/appwrite/playground-for-web/blob/fcd5aa02976f6787d14720a4e920402fafa6175b/public/index.html#L205) to your Appwrite url.

## Get Started

The **public/index.html** file in this repository contains **all** the playground examples and source code.

You can learn how to to integrate your Appwrite Web SDK in your project and see how different features of the SDK can be used.

This playground doesn't include any Appwrite best practices but rather intended to show the most simple examples and use cases of using the Appwrite API.

### Installation

`NOTE: Commands are to be executed on Linux, Mac, and Windows(using Powershell)`

1. Fork this repository by clicking on the <a href="https://github.com/appwrite/playground-for-web/new/master?readme=1#fork-destination-box"><kbd><b>Fork</b></kbd></a> button.
2. Clone the repo by running the command
```sh
$ git clone https://github.com/Your_Username/playground-for-web.git
```
3. Go inside the folder by command
```sh
$ cd playground-for-web
```
4. Run the command to install node modules
```sh
$ npm install
```
5. Start a web server by running using command
```sh
$ npm start
```
6. Access the url `http://localhost:8000` and start playing!

> Don't forget to update Appwrite endpoint and project ID

## Contributing

All code contributions - including those of people having commit access - must go through a pull request and approved by a core developer before being merged. This is to ensure proper review of all the code.

We truly ❤️ pull requests! If you wish to help, you can learn more about how you can contribute to this project in the [contribution guide](https://github.com/appwrite/appwrite/blob/master/CONTRIBUTING.md).

## Security

For security issues, kindly email us [security@appwrite.io](mailto:security@appwrite.io) instead of posting a public issue in GitHub.

## Follow Us

Join our growing community around the world! Follow us on [Twitter](https://twitter.com/appwrite), [Facebook Page](https://www.facebook.com/appwrite.io), [Facebook Group](https://www.facebook.com/groups/appwrite.developers/) or join our [Discord Server](https://appwrite.io/discord) for more help, ideas and discussions.
