# Quick Start

- Clone the repository
- Navigate into **next** and run `yarn install`
- Navigate into **sanity** and run `yarn install`

# Frontend

The frontend is built on [Next.js](http://nextjs.org).

# Backend

The backend is running [Sanity](https://www.sanity.io/).

## To deploy Sanity

```bash
sanity deploy
```

Once successful, you can access the backend here: [https://selfteachme.sanity.studio/](https://selfteachme.sanity.studio/)

## Troubleshooting

If you get an error message that says "Unauthorized - Session not found," there's information in the [docs](https://www.sanity.io/help/cli-errors) on how to resolve this issue, but essentially, you need to run:

```bash
sanity logout
sanity login
```

- Select **email / password** from the list of options.
- It will launch a web browser where you can login.
- You'll be redirected to the Terminal and should be able to login from there.
- Try running `sanity-deploy` again.
- Once successful, you can access the backend here: [https://selfteachme.sanity.studio/](https://selfteachme.sanity.studio/)
