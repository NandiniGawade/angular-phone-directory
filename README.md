# angular-phone-directory

## Features

1. Phone masking for canada phone number.
2. Ignored US international prefix. First number 1 will be ignored.
3. Validate phone number is 10 digit.
4. Added unit test cases.
5. Added e2e test cases.

## Approach

Implmeneted canada-phone directive. Directive will mask the phone number in canada phone number format.

Used on blur method to unmask the phone number and also validate phone number.

Display error message If phone number is not validate.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Install dependencies

Run `npm install`
## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run unit testcases

Run `npm run test`

## Run E2E testcases.

Run `ng e2e`