# uslege-assign

This repository contains a small backend script that can be used for parsing PDF documents on the
web that are accessed from
[this](https://capitol.texas.gov/Committees/MeetingsByCmte.aspx?Leg=88&Chamber=S&CmteCode=C610) web
page.

### System Requirements

The contents of this document assume that you are using a MacOS machine. If you are not, steps
outlined for setting up and running the application locally will be similar, but not exactly the
same.

- [nvm]: A [node] version manager.
- [Node][node] v20.x
- [homebrew]: A MacOSX package manager.
- [postgresql] (a [homebrew] package)
- [pnpm]: A [node] package manager.

## 1. Getting Started

This section of the documentation outlines - at a high level - how to setup your machine to run and
execute the script locally.

**Note**: _This documentation describes how to setup and configure the application for local
development on MacOSX. Many of the steps outlined in this section may also be applicable for a
Windows/Ubuntu machine as well, but the steps will not be exactly as they are described here._

For more information regarding how to execute the script contained in this application, please refer
to Section 2.

### 1.1: Repository

Clone this repository locally and `cd` into the directory.

```bash
$ git clone git@github.com:nickmflorin/uslege-assign.git
```

### 1.2: Installing System Requirements

This section walks through how to install and configure the prerequisites (System Requirements) for
this project.

#### 1.2.a [Node][node]

This project uses [node] v20.0.0. Your machine will most likely already have a system installation
of [node], but even if it does not - that is okay, we will not be using the system installation of
[node] but will rather isolate the version of [node] being used for this project to this repository
using [nvm].

**Important**: _Do not use a system installation of [node]. It will complicate your development
environment. Instead, see the next section for details about usage of [nvm]._

##### 1.2.a.i Installing [nvm]

Instructions for installing [nvm] can be found
[here](https://github.com/nvm-sh/nvm#installing-and-updating), but are also mentioned below for
purposes of completeness:

First, simply run the install script:

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

The above command will download a script and then run it. The script it runs will first clone the
[nvm] repository at `~/.nvm` and then attempt to add the following source lines to your machine's
shell profile script (which may be either `~/.bash_profile`, `~/.zshrc`, `~/.profile`, or
`~/.bashrc` - depending on your OS):

```bash
$ export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

**Note**: _This installation will automatically make changes to your shell profile script. The exact
file will depend on the type of machine you are running as well as the period of time in which the
machine was created. Most likely, your shell profile script will be `~/.zshrc` - which is the shell
profile used for Mac's created since the introduction of the M1 processor._

Since the [nvm] installation involved making changes to your shell profile script behind the scenes,
in order for those changes to take effect, you need to subsequently source your shell profile script
(`~/.zshrc` in this example):

```bash
$ . ~/.zshrc`
```

Finally, verify that your system recognizes the `nvm` command by running the following:

```bash
$ nvm
```

##### 1.2.a.ii Node Version

Now that [nvm] is installed, we need to use it to establish the correct version of [node], 20, that
is suitable for this project. This project's repository comes equipped with a `.nvmrc` file that
automatically tells [nvm] what version of [node] to use - but that version may still need to be
installed.

First, instruct [nvm] to use the [node] version specified by the `.nvmrc` file with the following
command:

```bash
$ nvm use
```

If you see an output similar to the following:

```bash
Found '/<path-to-repository>/nick.florin/.nvmrc' with version <v20.0.0>
Now using node v20.0.0 (npm v8.6.0)
```

It means that the correct version of [node] that is required for this project is already installed
with [nvm] and that version of [node] is active for this project's directory. The rest of this step
can be skipped and you can proceed to the next step, "1.2.a.iii: Homebrew".

On the other hand, if you see an error similar to the following:

```bash
Found '/<path-to-repository>/nick.florin/.nvmrc' with version <v20.0.0>
N/A: version "v20.0.0 -> N/A" is not yet installed.

You need to run "nvm install v20.0.0" to install it before using it.
```

It means that the correct version of [node] that is required for this project is not already
installed with [nvm], and must be installed before using it. To do this, simply run the following
command from the root of the project repository:

```bash
$ nvm install
```

This command will use [nvm] to install the correct version of [node] that is required for this
project, based on the specification in the project's `.nvmrc` file.

Finally, all that is left to do is to instruct [nvm] to use this version of [node] by executing the
following command - again, from the root of the project repository:

```bash
$ nvm use
```

For a sanity check, confirm that [nvm] is pointing to the correct version of [node] in the project
directory by executing the following command:

```bash
$ nvm current
```

The output of this command should be similar to the following:

```bash
$ v20.x.x
```

### 1.2.b: Homebrew

If on MacOSX, you will need to install [homebrew], which is a MacOSX package manager. Installation
instructions can be found on [homebrew]'s website.

### 1.2.c: pnpm

This application uses [`pnpm`][pnpm] to manage dependencies. Before installing the project's
dependencies, [pnpm] must be downloaded and setup on your machine. To download [`pnpm`][pnpm],
simply execute the following `curl` command:

```bash
$ curl -fsSL https://get.pnpm.io/install.sh | sh -
```

After downloading [`pnpm`][pnpm], make sure to source your machine's shell profile script (here, we
assume that is `~/.zshrc`):

```bash
$ . ~/.zshrc
```

Finally, ensure that the `pnpm` command is recognized by your machine:

```bash
$ pnpm -v
```

The [`pnpm`][pnpm] version should be 8.x.x. If it is not, refer to the next section, "Managing PNPM
Version".

###### Managing PNPM Version

[`pnpm`][pnpm] uses [corepack] to manage versions on your local machine. [corepack] can be installed
on your machine via [homebrew]:

```bash
$ brew install corepack
```

Once [corepack] is installed, activate it as follows:

```bash
$ corepack enable
```

Now you should be able to manage your [`pnpm`][pnpm] version for this project independently of the
system installation:

```bash
$ corepack prepare pnpm@<version> --activate
```

or

```bash
$ corepack prepare pnpm@latest --activate
```

### 1.3: Environment

This section discusses how to properly setup environment variables and dependencies in the
application.

#### 1.3.a ENV File

Simply copy the `.env.example` file to a new file, called `.env`. This file will be ignored by
source control.

```bash
$ cp ./.env.example ./.env
```

Then, modify the `.env` file to include the proper OpenAI secret key for your project, by pasting
the key next to the `OPEN_AI_API_KEY` variable.

#### 1.3.b: Dependencies

When setting up the environment for the first time, you must do a fresh install of the dependencies.

```bash
$ pnpm install
```

This will install the project dependencies in the `package.json` file.

### 1.4: Database

This project uses a [postgres] database for both production and local development. First, check to
see if your machine already has [postgres] installed:

```bash
$ which postgres
```

If the result of the command is a directory (usually `/usr/local/bin/postgres`, if installed via
[homebrew]), then it is already installed and you can proceed to the next step. If not, simply
install [postgres] via [homebrew]:

```bash
$ brew install postgres
```

The [postgres] installation will come equipped with [psql], which is [postgres]'s command line tool.
Once [postgres] is installed, or you have verified that your machine already has a [postgres]
installation, we need to start the [postgres] server:

```bash
$ brew services start postgresql
```

#### 1.4.a Database Environment Variables

The database connection parameters for the application are defined in the relevant `.env.*` files.

The database connection parameters defined in the environment are used directly by the application's
ORM, [Prisma][prisma], to establish a connection to the application database and allow the script to
run.

The following parameters must be in the environment for [Prisma][prisma] to properly connect to the
database:

```bash
POSTGRES_URL="postgresql://..."
POSTGRES_PRISMA_URL="postgresql://..."
POSTGRES_URL_NON_POOLING="postgresql://..."
POSTGRES_USER="..."
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="..."
```

These values will be defaulted for you in `.env.example` file, but you are more than willing to
change them if you desire.

#### 1.4.b Setting Up Application Database

Since the database itself may not exit yet, we will likely need to create it via the [psql] command
line. To do this, connect to the default database name `"postgres"`, that comes with the [homebrew]
installation of [postgres]:

```bash
$ psql -d postgres
```

##### 1.4.b.i Troubleshooting

It is possible (although very unlikely) that either your [postgres] installation did not come with
the default `"postgres"` database, or it was somehow removed. If this is the case, you may see an
error similar to the following:

```bash
$ psql: error: connection to server on socket "/tmp/.s.PGSQL.5432" failed: FATAL:  database "postgres" does not exist
```

If you see this error, you cannot connect to the [psql] shell because there are no databases to
connect to. To fix this, simply run the following from the command line, and then reconnect to the
[psql] shell:

```bash
$ createdb postgres
$ psql -d postgres
```

##### 1.4.b.ii Creating the Database

Once inside of the [psql] shell, create the appropriate [postgres] database associated with this
application, based on the configuration parameters defined in the environment:

```bash
$ CREATE DATABASE <DATABASE_NAME>;
```

Then, create the [postgres] user associated with the configuration variables defined in the
environment and subsequently grant all privileges to that user:

```bash
$ CREATE USER <DATABASE_USER> WITH PASSWORD '<DATABASE_PASSWORD>';
$ GRANT ALL PRIVILEGES ON DATABASE <DATABASE_NAME> TO <DATABASE_USER>;
```

Finally, assign the created or existing user as the owner of the created or existing database.

```bash
$   <DATABASE_NAME> OWNER TO <DATABASE_USER>;
```

##### 1.4.b.iii Assigning Permissions to Create Database

In the above section, a database with name `<DATABASE_NAME>` was created and the appropriate
permissions on that database were assigned to the database user, `<DATABASE_USER>`. However, we
still need to allow the `<DATABASE_USER>` to create new databases (versus just modifying the
existing database). This is required for [prisma] migrations to properly function.

To do this, simply give the database user, `<DATABASE_USER>`, the required permissions to create
databases so [prisma] migrations can function properly:

```bash
$ ALTER USER <DATABASE_USER> CREATEDB;
```

Now, the database user, `<DATABASE_USER>`, will be able to create databases in the [postgres]
service and [prisma] migrations will properly function.

You can now quit the [psql] shell:

```bash
$ \q
```

All of these steps are necessary in order to ensure that [Prisma][prisma] can properly access the
database, perform migrations and/or reset the database if necessary.

The application should now be ready to connect to the database for local development.

## 2. Executing Locally

This section of the documentation describes how to execute the script the application contains
locally. This section assumes that you have already performed the necessary steps outlined in
Section 1.

### 2.1 Node Version

Ensure you are using the correct version of [node]:

```bash
$ nvm use
```

### 2.2 Dependencies

Install dependencies

```bash
$ pnpm install
```

### 2.3: Database

Make sure the database server is running:

```bash
$ brew services start postgresql
```

### 2.4: Migrations

Run the database migrations:

```bash
$ pnpm migrate-dev
```

### 2.5 Execution

Execute the script:

```bash
$ pnpm parse-pdf
```

### 3. Development

### 3.1 Linting

This project uses [ESLint][eslint] to lint files and [Prettier][prettier] inside of the
[ESLint][eslint] configuration which is responsible for formatting files of all types.
[ESLint][eslint] is configured to automatically format the file when the file is saved (a
configuration that is defined in `./vscode/settings.json`). If that is not desirable, you can easily
turn that setting off in your local [VSCode][vscode] settings.

#### 3.1.a Performing Linting Checks

To perform linting checks on the project, simply run [ESLint][eslint] as follows:

```bash
$ pnpm eslint
```

With that being said, the project's [Jest][jest] testing suite is configured to not just perform
unit tests, but also to perform linting and formatting checks via [ESLint][eslint] and
[Prettier][prettier]. This is the recommended way to perform the checks, because the output is much,
much more suitable for debugging and the hot reloading feature of [Jest][jest] will save you a lot
of time.

This can be done simply as:

```bash
$ pnpm test
```

For more information related to [Jest][jest] and the linting checks it performs, please see the
section further down in this documentation, "Testing".

#### 3.1.b Automatically Fixing [ESLint][eslint] Violations

Some [ESLint][eslint] violations can be automatically fixed by [ESLint][eslint] itself. This can be
performed via the `eslint-fix` command, which is defined in the `package.json` file:

```bash
$ pnpm eslint-fix
```

This command will automatically fix and format all [ESLint][eslint] and [Prettier][prettier]
violations in the repository that are capable of being auto-fixed.

### 3.2 Testing

This documentation is intended to outline configurations, patterns and methodologies that are used
to test the Console application.

We use [Jest][jest] to handle integration and unit testing in the Console. The entire test suite can
be run with the following command:

```bash
$ pnpm test
```

#### 3.2.a Projects

The test configuration is split up into
[projects](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig), such that
certain tests can use different sets of configuration parameters that would not otherwise be
possible with a single configuration.

The [Jest][jest] testing suite is broken down into 3
"[projects](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig)":

1. **Functional Unit Tests**: Unit tests that are run against functional utilities or logic in
   `src/lib`.
2. **Prettier**: Prettier checks that are performed against relevant files in the project.
3. **ESLint**: ESLint checks that are performed against non `.scss` files in the project.

The following table describes the various aspects of each individual
[Jest](https://jestjs.io/docs/getting-started) project in the application:

|        Project        |           Config File           |       Files Tested        |
| :-------------------: | :-----------------------------: | :-----------------------: |
| Functional Unit Tests | `src/tests/unit/jest.config.ts` |           `.ts`           |
|       Prettier        |    `jest.config.prettier.ts`    |       All Relevant        |
|        ESLint         |     `jest.config.eslint.ts`     | All Relevant, non `.scss` |

### 3.3 Database

This section of the documentation outlines how to manage the application database as it relates to
this application.

#### [postgres]

When developing locally, it is important that the [postgres] server is running. This service can be
started via [homebrew] as follows:

```bash
$ brew services start postgresql
```

Restarting the [postgres] service can be done as follows:

```bash
$ brew services restart postgresql
```

Stopping the [postgres] service can be done as follows:

```bash
$ brew services stop postgresql
```

#### 3.3.a Prisma

This application uses [Prisma][prisma], an ORM that that maps records in the database to typescript
objects while exposing a database client that can be used to interact with those records. To
properly use this client, a developer must understand how this ORM works.

##### 3.3.a.i Schema

The database structure for the application is defined in a [prisma] `*.schema` file. This
application's `*.schema` file is located at
[`src/prisma/schema.prisma`](./src/prisma/schema.prisma). The [prisma] ORM uses the definitions in
that file to properly construct, update and manage the [postgres] database.

When updates are made to the [prisma] schema file, migrations must be run such that [prisma] can
digest those changes and make the appropriate updates to the database structure. This can be done as
follows:

```bash
$ pnpm migrate-dev
```

This command will prompt [prisma] to update the database structure if changes were detected. If
[prisma] detects changes, it will prompt you for a name that should be assigned to the accompanied
migration file (stored [here](./src/prisma/migrations/)). The name of the migration file should be a
snake-cake name that is indicative of the changes that were made (i.e.
"add_updated_at_field_to_user").

If it is desired that just the migration file is created (without actually updating the database),
the `--create-only` flag can be used:

```bash
$ pnpm create-migrations
```

This will create the migration file, but will not apply it.

##### 3.3.a.ii `PrismaClient`

The [`PrismaClient`](./src/prisma/model/generated/index.d.ts) is what the application uses to
communicate with the database. This client ([`prisma`](./src/prisma/client/index.ts)) relies on type
bindings that are dynamically generated by [prisma] based on the existing schema file. This means
that whenever the schema file changes, the types for the [`PrismaClient`](./src/server/db/index.ts)
will be incorrect until the [`PrismaClient`](./src/server/db/index.ts) is regenerated.

This can be done as follows:

```bash
$ pnpm generate-client
```

Note that when running the `reset` command (discussed below), the
[`PrismaClient`](./src/prisma/model/generated/index.d.ts) is automatically updated.

##### 3.3.a.iii Seeding

The application comes equipped with a databae seed file
[`./src/prisma/seed.ts](./src/prisma/seed.ts). This file is used to populate the database with dummy
data/fixtures for development. This script can be run as:

```bash
$ pnpm seeddb
```

That being said, this seed process _only_ works when the database state is empty - if the database
state is not empty, unique constraint violations will be triggered when adding data to the database.
Therefore, in order to run the [`./src/prisma/seed.ts](./src/prisma/seed.ts) script, it must be done
as a part of [prisma]'s `reset` flow:

```bash
$ pnpm migrate-reset
```

This command will wipe the current database, run all migrations and _then_ run the
[`./src/prisma/seed.ts](./src/prisma/seed.ts) script.

[psql]: https://www.postgresql.org/docs/current/app-psql.html
[homebrew]: https://brew.sh/
[postgresql]: https://www.postgresql.org/docs/current/app-psql.html
[nvm]: https://github.com/nvm-sh/nvm
[node]: https://nodejs.org/en/
[postgres]: https://www.postgresql.org/
[homepage]: ./ReadMe.md
[react]: https://reactjs.org/
[prettier]: https://prettier.io/
[vscode]: https://code.visualstudio.com/
[eslint]: https://eslint.org/
[jest]: https://jestjs.io/docs/getting-started
[prisma]: https://www.prisma.io/
[pnpm]: https://pnpm.io/installation
[corepack]: https://nodejs.org/api/corepack.html
