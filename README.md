# PRODUCT API - ITOMMEY BE TEST

## Getting Started

First, run this command to install all package dependencies:

```bash
npm install
```
Next, create two database in **postgreSQL** one for development and the other for test. Then adjust the configuration value for dev and test in the `config/config.js` file with the database credentials that have been created. To migrate the model and seed initial data into database, run this command:

```bash
npx sequelize-cli db:migrate

npx sequelize-cli db:migrate --env test

npx sequelize-cli db:seed:all
```

Run this command to start the API's server:

```bash
npm run dev

or

npm run start
```

All available API requests and examples of their input and output can be seen in the **postman collection**.

## Responses

Generally, all API requests will send JSON output like this:

```bash
{
    "status": string,
    "statusCode": integer,
    "message": string,
    "data": {object} or [array]
}
```
The `status` attributes contain a single word to represent the API response whether "success" or "failed".

The `statusCode` attributes contain an HTTP status code.

The `message` attributes contain a short message that represents the API response in general.

The `data` attribute contains the output data returned by the API response.

The following is the list of HTTP status code :

| Status Code | Description |
| :--- | :--- |
| 200 | `SUCCESS` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

## Tests
Run this command to run the test case:

```bash
npm run test
```
