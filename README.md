# LinkMink Interview Problems

## Installation

``` bash
git clone https://github.com/linkminkllc/linkmink-interview.git
cd linkmink-interview
npm i
```

## Building

This is a typescript project, with a `tsconfig.json` provided in the root
directory which will build all necessary project files in the `src/` directory.
A convenience script is provided for building all project files.

``` bash
npm run build
```

## Running

There are two projects, each has an npm script that will run it:

``` bash
npm run proj1
npm run proj2
```

## Project 1

An express app is provided which has one endpoint that returns a collection of
users. All of the documentation for this API is included below. Using your
preferred frontend framework (or plain js), build a component that:

- Calls the API, 
- Sorts the users based on score
- Renders the list of users with their score next to their name (e.g. `Doug: 128`)

### Authentication

Authenticate all api calls using a Bearer Token in the HTTP Authorization
header. The token value is `tok_123abc`.

### `/users`

Returns a collection of all users. The users are returned in no specific order.


## Project 2

A small program is provided in `src/bugfix.ts`. There is a problem with the
code. It is supposed to delete 3 users, then print the remaining users.
Everything you need is in the `bugfix.ts` file.

- Run the code a few times to see the problem in your console using `npm run proj2`
- Walk through the process of fixing the bug verbally and through code. 
