# Integrated Travel Booking Platform

This application is a travel planning platform that provides users with the most up-to-date trip and hotel information by scraping live data from popular travel websites like Yatra and Kayak. It also allows users to book their desired trips and accommodations directly through the platform.

## Features

* **Real-time data scraping:**  Scrapes live data from travel websites like Yatra and Kayak to ensure users have the latest information on flights, hotels, and travel deals.
* **Trip booking:** Enables users to book flights and hotels directly through the platform, streamlining the travel planning process.
* **Flight and hotel search:** Offers a user-friendly search interface to find the best flights and hotels based on user preferences and criteria.
* **User authentication:** Secure user accounts with login and registration functionality.
* **Admin panel:** Provides an admin panel for managing users, bookings, and travel data.
* **Payment integration:** Integrates with Stripe for secure and seamless payment processing.


## Technologies Used

* **Next.js 14:**  A React framework for building performant and user-friendly web applications.
* **TypeScript:** A typed superset of JavaScript for improved code maintainability and scalability.
* **Prisma:** An ORM for simplifying database interactions.
* **PostgreSQL:** A powerful and reliable relational database for storing application data.
* **Redis:** An in-memory data store for caching and improving performance.
* **Stripe:** A payment processing platform for handling secure online transactions.
* **Bright Data:** A web data platform for accessing and collecting public web data.
* **Puppeteer:** A Node library for controlling headless Chrome or Chromium browsers for web scraping.

# Integrated Travel Booking Platform

This application is a travel planning platform that provides users with the most up-to-date trip and hotel information by scraping live data from popular travel websites like Yatra and Kayak. It also allows users to book their desired trips and accommodations directly through the platform.

## Features

* **Real-time data scraping:**  Scrapes live data from travel websites like Yatra and Kayak to ensure users have the latest information on flights, hotels, and travel deals.
* **Trip booking:** Enables users to book flights and hotels directly through the platform, streamlining the travel planning process.
* **Flight and hotel search:** Offers a user-friendly search interface to find the best flights and hotels based on user preferences and criteria.
* **User authentication:** Secure user accounts with login and registration functionality.
* **Admin panel:** Provides an admin panel for managing users, bookings, and travel data.
* **Payment integration:** Integrates with Stripe for secure and seamless payment processing.


## Technologies Used

* **Next.js 14:**  A React framework for building performant and user-friendly web applications.
* **TypeScript:** A typed superset of JavaScript for improved code maintainability and scalability.
* **Prisma:** An ORM for simplifying database interactions.
* **PostgreSQL:** A powerful and reliable relational database for storing application data.
* **Redis:** An in-memory data store for caching and improving performance.
* **Stripe:** A payment processing platform for handling secure online transactions.
* **Bright Data:** A web data platform for accessing and collecting public web data.
* **Puppeteer:** A Node library for controlling headless Chrome or Chromium browsers for web scraping.

## Installation

**1. Project Setup**

*   **Create a new Next.js project:** Use the command `npx create-next-app@latest`.  The video uses the name "arite" for the project.
*   **Install dependencies:** The video highlights installing specific packages:
    *   `npm install @prisma/client` (for database interaction)
    *   `npm install ioredis redis bullmq` (for Redis and queue management)

**2. Database Setup**

*   **Choose a database:** The video uses PostgreSQL. You'll need to have PostgreSQL installed and running.
*   **Prisma setup:**
    *   Initialize Prisma with `npx prisma init`.
    *   Configure your database connection in the `schema.prisma` file.
    *   Generate Prisma client with `npx prisma generate`.

**3. Redis Setup**

*   **Install Redis:** Ensure you have Redis installed on your machine.
*   **Configure Redis connection:** The video shows setting up the Redis connection URL in an environment variable or using the default local address.

**4. Environment Variables**

*   **Create an `.env.local` file:** This file will store your environment variables.
*   **Add essential variables:** The video mentions:
    *   `DATABASE_URL`: Your PostgreSQL database connection string.
    *   `REDIS_URL`: Your Redis connection URL.
    *   `JWT_SECRET`: A secret key for JSON Web Tokens (JWT).
    *   `STRIPE_KEY`: Your Stripe API key.

**5. Coding and Implementation**

*   **Follow the video tutorial:** The video demonstrates the coding process for building the application, including:
    *   Setting up API routes.
    *   Implementing data scraping with Puppeteer and Bright Data.
    *   Integrating Stripe for payments.
    *   Building the user interface.

**6. Deployment (Appable)**

*   **Set up an Appable account:** Create an account on Appable if you don't have one.
*   **Connect your GitHub repository:** Link your GitHub repo to Appable.
*   **Configure environment variables on Appable:** Set the same environment variables as in your `.env.local` file on the Appable platform.
*   **Deploy:** Appable will build and deploy your application.

## Usage

Once the application is set up, you can:

* Browse available trips and hotels.
* Search for specific flights and accommodations.
* Create a user account.
* Book your desired trips.
* Access the admin panel (if you have admin privileges).

