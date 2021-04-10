# Welcome to Jinx

Jinx is a all in one platform to help students and young adults streamline their job search.

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

Jinx is an app that lets users track their job applications. When users log in, they are greeted with a dashboard which allows them to edit their information, and if an admin, other users' information. On the applictions page, users can add applications in different categories: `wishlist`, `applied`, `interviews`, `offer`, and `rejected`. Users can also modify entries after adding them to one of the categories. Under the feed page, users can see application updates of the people they follow. Next, the explore page allows users to add job postings they've discovered. Users can see all of the job postings ever added and anyone can add a new posting. The unique companies are shown above the postings table. finally, users can use the contacts page to see all users and choose who to follow.

## Roles

The differences between admins and applicants differ in what access they have in the dashboard page.

#### Admin privileges
- Edit their own name, email, phone number and role.
- If the admin demotes themselves to a new user they will be logged out.
- Able to see an admin table, which allows them to edit each individual user's name, email, phone number and role.
- Can create new users with either admin or applicant roles.

#### Applicant privileges
- Edit their own name, email and phone number.
- Not able to see the entire users table nor edit their own roles.

## Routes overview

`/applications`
- add, get all applications from user
- modify an application

`/connection`
- follow, unfollow users
- 

`/feed`

`/posting`

`/users`
