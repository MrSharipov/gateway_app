## Description

This is the project for Nodejs junior level checkup

## Installation

```bash
$ docker-compose up -d --build
```

## If you don't have docker in your system, you can download it for the following url:

- Docker - [Install docker](https://www.docker.com/products/docker-desktop/)

## If you don't want use docker in your system, you can just use your local environment by running following commands:

```bash
$ npm install
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Making a request

```json
{
  "jsonrpc": "2.0",
  "method": "weather.find",
  "params": "Tashkent",
  "id": 1
}
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Umidjon Sharipov](https://t.me/umidjon2026)
