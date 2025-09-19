# Installation Operations for Sevilla IMD Website 🚀

Welcome to the Installation documentation for Sevilla IMD Website! In this guide, we'll walk you through the setup and deployment process, ensuring a smooth and efficient development workflow. We leverage the power of [Docker](https://www.docker.com/), and [Docker compose](https://docs.docker.com/compose/) to automate, containerize, and orchestrate application deployment. 🛠️🐳🌐

- **Docker** encapsulates our application and its dependencies into a container to ensure consistency across multiple development, testing, and deployment environments. It's like packing your entire application, including the environment it runs in, into a portable box that you can run anywhere! 📦🚀

## Our Docker Stack 📚

We deploy a robust website running [Plone](https://plone.org/) using a Docker stack that consists of:

- **Plone Frontend using Volto:** A modern, fast, React-based frontend that delivers an exceptional user experience. It's like having a sleek, high-performance car to navigate the web! 🏎️💨

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
# Razzle API URL
RAZZLE_INTERNAL_API_PATH=http://192.168.1.33:8080/Plone
VOLTO_ROBOTSTXT="User-agent: *\nDisallow: /slides/\nDisallow: /te-destacamos/\nDisallow: /avisos/\nDisallow: /background\nDisallow: /ficheros/\nDisallow: /selects/\nDisallow: /fotos-uso-privado/\nDisallow: /area-privada/\nDisallow: /app/carreras/clasificaciones/\nDisallow: /app/maraton/"

# PostgreSQL Server
POSTGRES_VERSION=14.15
POSTGRES_HOST=db
POSTGRES_USER=plone
POSTGRES_PASSWORD=jtSdjwghqspy
POSTGRES_PORT=5432
POSTGRES_DB=plone
POSTGRES_DEFAULT_TEXT_SEARCH_CONFIG=POSTGRES_catalog.spanish
POSTGRES_TZ=Europe/Madrid
POSTGRES_PGTZ=CET
```

Note: The `.env` file is included in `.gitignore`, ensuring environment-specific configurations aren't pushed to the repository.

### Server installation

You need either a Ubuntu or Debian based system for [imd.notacoolcompany.com](http://imd.notacoolcompany.com/), enable SSH, and install a supported version of Python 3 on that system.

#### Zope/Plone Maquine

Execute the following to start container orchestration using ``docker compose`` for building PostgreSQL database and Plone CMS backend images:

#### Backend Docker starting

```shell
make stack-backend-start
```

So far you build the Docker image, the Docker container called ``backend`` and start the Zope server.

##### Create the Website

Now, you must create a Website called ``Plone``.

Go to the URL address: http://localhost:8080/ with the username ``admin`` and the password ``admin``.

Go to ``Create a new site`` > ``Plone Site (Volto)`` and click on the ``Create`` button.

At the ``Create a Plone site`` form, please, verify:

- The ``Path Identifier*`` field value as ``Plone``.

- The ``Language`` field value as ``Español``.

- The ``Timezone`` field value as ``Madrid (Europe/Madrid)``.

- The ``Create Example Content`` option without unmarked.

And click on the ``Submit`` button.

So far you created the ``Plone`` Website at the Zope server.

##### Install the policy package

Now, you must install the policy package called ``Web del IMD de Sevilla: Instalar`` into the ``Plone`` Website.

Go to the ``Complementos`` panel: http://localhost:8080/Plone/prefs_install_products_form find the ``Web del IMD de Sevilla: Instalar`` addon and click on the ``Instalar`` button.

So far you installed the policy package into the ``Plone`` Website.

##### Install the content structure

Now, you must install the content structure into the ``Plone`` Website.

Go to the ``Site Configuration Full Import`` (``portal_setupe``) tool into ``Interfaz de Administración``: http://localhost:8080/Plone/portal_setup/manage_fullImport find the ``Select a profile by title:`` field, select ``Web del IMD de Sevilla: Ejemplos de Contenidos`` option from the list and click on the ``Import all steps`` button.

This way, you already have the Zope/Plone backend server correctly installed and configured.

#### Backend Docker status

Execute the following command to check the status of the Backend Docker :

```shell
make stack-backend-status
```

#### Backend Docker stoping

Execute the following command to stop Backend Docker stack:

```shell
make stack-backend-stop
```

#### Backend Docker removing

Execute the following command to remove the Backend services, volumes and networks:

```shell
make stack-backend-rm
```

---

#### Volto Frontend Maquine(s)

Execute the following to start container orchestration using ``docker compose`` for building Volto app client Frontend image:

#### Frontend Docker starting

```shell
make stack-frontend-start
```

#### Frontend Docker status

Execute the following command to check the status of the Frontend Docker :

```shell
make stack-frontend-status
```

#### Frontend Docker stoping

Execute the following command to stop Frontend Docker stack:

```shell
make stack-frontend-stop
```

#### Frontend Docker removing

Execute the following command to remove the Frontend services, volumes and networks:

```shell
make stack-frontend-rm
```

---

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

You can see the Volto app client container logs, executing the following command:

```shell
docker compose logs -f frontend
```

With the above commands you can verify that the containers and their processes are running correctly.
