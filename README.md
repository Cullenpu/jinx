![Jinx Logo](client/src/assets/img/logo/jinx_logo_text_small.svg)

Jinx is an all in one platform to help students and young adults streamline their job search.

It is currently deployed [here](https://jinx-app-209.herokuapp.com/)

## Installation

Both the frontend and backend dependencies must be installed.
```bash
# Clone into jinx directory
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
#### Profile Icon (Top right visible on all pages)
- Allows the user to signout 
- Displays the current user's profile picture (auto generated) along with their name and email

#### Dashboard
- When users log in, they are greeted with a dashboard which allows them to edit their information.
- Admin have the added ability to view and edit all current user information and to add new admins and users.
- A admin can demote themselves to a applicant which will force them to be logged out.
- An admin can also delete themselves in the user table, this will also force a log out.

#### Applications
- On the applictions page, users can add applications in different categories: `wishlist`, `applied`, `interviews`, `offer`, and `rejected`. 
- Users can also modify existing entries after adding them to one of the categories.

#### Feed
- Under the feed page, users can see application updates of the people they follow.

#### Explore
- The explore page allows users to view popular companies and postings that other users are applying to.
- Applicants also have the ability to add job postings they've discovered.
- Users can see all of the job postings ever added and anyone can add a new posting.
- Unique companies are shown above the postings table.

#### Connections
- Users can use the contacts page to see other users on the platform that they want to connect to.
- Here, they can choose who to follow to be notified of their activity.
- The contacts who they follow will show up on the feed.


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
|Type    |Route        |Use                                        |Data                                                                        |Return        |
|--------|-------------|-------------------------------------------|----------------------------------------------------------------------------|--------------|
|`GET`   |`/`          | Get all applications of current user      | `none`                                                                     |`applications`|
|`POST`  | `/`         | Create an application for current user    | `userID`, `company`, `role`, `status`                                      |`application` |
|`GET`   |`/single/:id`|Get specific application of current user   |`id`                                                                        |`application` |
|`PATCH` |`/:id`       |Modify specific application of current user|One of `company`, `postingID`, `link`, `role`, `status`, `notes`, `referral`|`application` |
|`DELETE`|`/`          |Delete all applications                    |`none`                                                                      |`none`        |

`/connection`
|Type    |Route |Use                                     |Data        |Return       |
|--------|------|----------------------------------------|------------|-------------|
|`GET`   |`/`   |Get all users the current user follows  |`none`      |`connections`|
|`POST`  |`/`   |Add a connection with current user      |`followedId`|`user`       |
|`DELETE`|`/:id`|Remove one of current user's connections|`none`      |`none`       |
|`DELETE`|`/`   |Delete all connections                  |`none`      |`none`       |

`/feed`
|Type |Route|Use                                                                            |Data  |Return     |
|-----|-----|-------------------------------------------------------------------------------|------|-----------|
|`GET`|`/`  |Get everyone the currnet user follows and for each of them get their feed items|`none`|`feedItems`|

`/posting`
|Type    |Route|Use                |Data                                     |Return   |
|--------|-----|-------------------|-----------------------------------------|---------|
|`GET`   |`/`  |Get all postings   |`none`                                   |`posting`|
|`POST`  |`/`  |Add a posting      |`companyName`, `link`, `location`, `role`|`none`   |
|`DELETE`|`/`  |Delete all postings|`none`                                   |`none`   |

`/users`
|Type    |Route           |Use                         |Data                                        |Return      |
|--------|----------------|----------------------------|--------------------------------------------|------------|
|`GET`   |`/check-session`|Check if user is logged in  |`none`                                      |`none`      |
|`POST`  |`/login`        |Log in a user               |`email`, `password`                         |`id`, `role`|
|`GET`   |`/logout`       |Log out a user              |`none`                                      |`none`      |
|`GET`   |`/`             |Get currently logged in user|`none`                                      |`user`      |
|`POST`  |`/`             |Creates a user              |`email`, `password`, `name`, `role`, `phone`|`newUser`   |
|`GET`   |`/all`          |Get all users               |`none`                                      |`none`      |
|`PATCH` |`/edit/:id`     |Edit a user                 |One of `name`, `email`, `phone`, `role`     |`user`      |
|`DELETE`|`/remove/:id`   |Delete a user               |`none`                                      |`user`      |

## Contributing

- [Windsor Huang](https://github.com/Windosaurus/)
- [Cullen Pu](https://github.com/Cullenpu)
- [Henry Wang](https://github.com/wang-henry/)