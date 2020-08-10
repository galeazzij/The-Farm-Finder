# The-Farm-Finder
This is a student project built to help people find and support local farms

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**The Farm Finder** is an app that lets users find local farms and support them by buying directly from them or by patronizing locations that they sell to (such as restaurants and supermarkets)._


<br>

## MVP

_The **Farm Finder** MVP will allow users to create an account (either Farmer or Non-Farmer) and add and serach for foods that they want to purchase (Non-farmer user) or offer to sell (Farmer user)._

<br>

### Goals

- _Users can create an account_
- _Non-Farm users can search for farms and add farms/restaurants/supermarkets that are not listed._
- _Non-farm users can CRUD foods they are interested in._
- _Farm users can CRUD foods they sell._
- _Farm users can CRUD locations where they sell._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Framework for building component based frontend._ |
|   React Router   | _Framework for delcaritive routing for React components._ |
| React Bootstrap | _To provide responsive fronted styling_ |
|     Ruby on Rails      | _Web-app framework for creating MVC databases._ |

<br>

### Client (Front End)

#### Wireframes

[Whimsical Wireframe](https://whimsical.com/BMpM3NfrnWHAKp35H2FTrp)

#### Component Tree
[Component Tree](https://app.lucidchart.com/invitations/accept/3fe0e283-9570-4c90-acb5-02dda1922705)

#### Component Hierarchy 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Main.jsx
      |__ Login.jsx
      |__ Foods.jsx
      |__ Address.jsx
      |__ Search.jsx
      |__ Footer.jsx
      |__ Map.jsx
      |__ Farms
      |__ Food
      |__ Locations
|__ services/
      |__ api-helper.js
      |__ foods.js
      |__ farms.js
      |__ locations.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
