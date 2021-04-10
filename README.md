# Welcome to Jinx

Jinx is a all in one platform to help students and young adults streamline their job search.

It is currently deployed [here](https://jinx-app-209.herokuapp.com/)

## Installation

Both the frontend and backend dependencies must be installed.
```bash
# CLone into jinx directory
git clone https://github.com/csc309-winter-2021/team21.git jinx
cd jinx
npm install
cd client
npm install
```

## Usage

The application and database must be run from 2 different terminals. The frontend will open your browser [http://localhost:5000](http://localhost:5000).

```bash
# Starting from jinx directory
mkdir mongo-data
mongod --dbpath mongo-data
```
```bash
# Starting from jinx directory
npm run build-run
```

## How to use the application

Jinx is an app that lets users track their job applications. We believe that our friends and immediate social circles are invaluable resources when it comes to job searching. However, with work and school being online, it's become harder and harder to interact with our peers. Using Jinx, user's can follow they're friends and other people using the platform to see what places they're applying to, where they have interviews, and more. 

Below are details for individual pages.

##### Dashboard
- When users log in, they are greeted with a dashboard which allows them to edit their information.
- Admin have the added ability to view user information and to add new admins and users.

##### Applications
- On the applictions page, users can add applications in different categories: `wishlist`, `applied`, `interviews`, `offer`, and `rejected`. 
- Users can also modify entries after adding them to one of the categories.

##### Feed
- Under the feed page, users can see application updates of the people they follow.

##### Explore
- The explore page allows users to view popular companies and postings that other users are applying to.
- Applicants also have the ability to add job postings they've discovered.
- Users can see all of the job postings ever added and anyone can add a new posting.
- Unique companies are shown above the postings table.

##### Explore
- Users can use the contacts page to see other users on the platform that they want to connect to.
- Here, they can choose who to follow to be notified of their activity.

## Roles

The differences between admins and applicants differ in what access they have in the dashboard page.

##### Admin privileges
- Edit their own name, email, phone number and role.
- If the admin demotes themselves to a new user they will be logged out.
- Able to see an admin table, which allows them to edit each individual user's name, email, phone number and role.
- Can create new users with either admin or applicant roles.

##### Applicant privileges
- Edit their own name, email and phone number.
- Not able to see the entire users table nor edit their own roles.

## Routes overview

`/applications`
- add an application for user
- get all applications for a user
- modify an application for a user
- get all applications in the db
- delete all applications in the db

`/connection`
- follow a user
- get all the the people a user follows
- delete a connection
- get all connections in the db
- delete all connections in the db

`/feed`
- get all notifications for a user

`/posting`
- add a posting to the db (also fetches a logo for the company based on link)
- get postings
- delete postings

`/users`
- check the state of the user session and updates if necessary
- login a user
- logout a user
- signup a user / create a new user
- get all users
- get the info for currently logged in user
- get a the info for a specific user by id
- delete a user