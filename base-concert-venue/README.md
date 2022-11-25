# Popular Concert Venue

### An app to support the Udemy course [Testing Next.js Apps](https://www.udemy.com/course/nextjs-testing/)

## Installation

1. Run `npm install`
1. Run `cp .env.development.local_template .env.development.local`
1. Run `cp .env.test.local_template .env.test.local`
1. Run `cp .env.local_template .env.local`
1. In _.env.local_ and _.env.test.local_:

- add long, hard-to-guess strings as the values for `NEXTAUTH_SECRET` and `REVALIDATION_SECRET`

  - command to generate a random string: `openssl rand -base64 32`

## Running the App

Run `npm run dev`. The app will be found at [http://localhost:3000]


## 소감

개인적으로 front-end testing에 대해 궁금했었는데 정말 유익하게 배울 수 있었고 다양한 case에 대해 어떻게 접근해야하는지 알 수 있었다. 특히 authentication 부분!(생각보다 쉽게 넘어감)

이후 개인적으로 따로 정리할 필요성이 있고 학기를 마치고 포스팅해야 겠다. 