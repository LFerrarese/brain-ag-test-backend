# Brain Ag Test - Backend

This project was made for a company test.

## Running locally

Clone the repository

```bash
  git clone https://github.com/LFerrarese/brain-ag-test-backend.git
```

Enter the project directory

```bash
  cd my-project
```

Create an **.env** file with the variables below

```javascript
// change the fields with your data

DATABASE_URL =
  "postgresql://username:password@hostname:port/db_name?schema=public";
API_PORT = 4000;
JWT_SECRET = "some hash";
```

Install the dependencies

```bash
  pnpm install
```

Feed the database with the seeds

```bash
  pnpm run dev:up
```

Start the server

```bash
  pnpm run dev
```
