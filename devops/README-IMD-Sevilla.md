# Installation Operations for Sevilla IMD Website 🚀

Welcome to the Installation documentation for Sevilla IMD Website! In this guide, we'll walk you through the setup and deployment process, ensuring a smooth and efficient development workflow. We leverage the power of [Docker](https://www.docker.com/), and [Docker compose](https://docs.docker.com/compose/) to automate, containerize, and orchestrate application deployment. 🛠️🐳🌐

- **Docker** encapsulates our application and its dependencies into a container to ensure consistency across multiple development, testing, and deployment environments. It's like packing your entire application, including the environment it runs in, into a portable box that you can run anywhere! 📦🚀

## Our Docker Stack 📚

We deploy a robust website running [Plone](https://plone.org/) using a Docker stack that consists of:

- **Plone Backend:** Responsible for the API, it's the engine under the hood, ensuring that data is processed, stored, and retrieved efficiently. 🏭🚀

- **Postgres 14 Database:** A reliable, robust database to store the site data, ensuring that our content is safe, secure, and quickly accessible. 🗃️⚡

Now, let’s dive into the setup! 🏊‍♂️💫

## Setup

Ensure you navigate to the `sevilla-imd-website` root folder before executing any commands listed in this document. From the root of your repository, execute:

```shell
cd ~/sevilla-imd-website
```

### Environment Configuration

Start by creating an `.env` file in the `devops` folder. You can copy the existing `.env_dist` file as a starting point:

```shell
cp .env.example .env
```

Edit the `.env` file to suit your environment. For example:

```ini
# Plone backend
PLONE_VERSION=6.1.2
PLONE_PORT=8080

# Volto frontend
VOLTO_VERSION=18.23.0
VOLTO_PORT=3000
RAZZLE_INTERNAL_API_PATH=http://backend:8080/Plone

# PostgreSQL DB
POSTGRES_VERSION=14.15
POSTGRES_USER=plone
POSTGRES_PASSWORD=jtSdjwghqspy
POSTGRES_DB=plone
```

Note: The `.env` file is included in `.gitignore`, ensuring environment-specific configurations aren't pushed to the repository.

### Server installation

You need either a Ubuntu or Debian based system for [imd.notacoolcompany.com](http://imd.notacoolcompany.com/), enable SSH, and install a supported version of Python 3 on that system.

#### Zope/Plone Maquine

Execute the following to start container orchestration using ``docker compose`` for building PostgreSQL database and Plone CMS backend images:

```shell
make stack-start-backend
```

### Log Monitoring

Monitor logs for each service using the commands below:

```shell
docker compose ps -a
```

You can see the Database container logs, executing the following command:

```shell
docker compose logs -f db
```

You can see the Plone CMS backend container logs, executing the following command:

```shell
docker compose logs -f backend
```

With the above commands you can verify that the containers and their processes are running correctly.
