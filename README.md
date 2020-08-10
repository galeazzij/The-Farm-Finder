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
|    Axios     | _To handle calls to the BE._ |

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
      |__ Search.jsx
      |__ Footer.jsx
      |__ Avatar.jsx
      |__ Farms.jsx
      |__ Food.jsx
      |__ Navigation.jsx
|__ services/
      |__ api-helper.js
      |__ foods.js
      |__ farms.js

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|        Main  | class |   y   |   n   | _The main will have host all other components._       |
|     Login    |   class    |   y   |   n   | _The login will handle user login._      |
|      Navigation | functional |   n   |   y   | _Allows user to navigate throughout the app._                 |
|    Search    | functional |   y   |   y   | _The search will show info the user looks for._ |
|      Footer  | functional |   n   |   n   | _The footer will will provide common info on each page._       |
|   Avatar    |   functional    |   n   |   y   | _The avatar will render the the users chosen image._      |
| Farms | functional |   n   |   y   | _The farms will render the farm info via props._                 |
|    Food    | functional |   n   |   y   | _The food will render the food info via props._ |

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|Create BE databases    |   H    |     3 hrs      |        TBD      |       TBD     |
| Build BE Models |    H     |     3 hrs      |        TBD      |       TBD     |
| Create CRUD Actions BE   |   H    |     3 hrs      |        TBD      |       TBD     |
| Build Routes|    H     |     3 hrs      |        TBD      |       TBD     |
| Build FE framework   |   H    |     5 hrs     |        TBD      |       TBD     |
| Create CRUD Actions FE |    H     |     3 hrs      |        TBD      |       TBD     |
| Build Routes|    H     |     3 hrs      |        TBD      |       TBD     |
| Build FE framework   |    H     |     3 hrs      |        TBD      |       TBD     |
| Create CRUD Actions FE |    H     |     3 hrs      |        TBD      |       TBD     |
| Connect FE and BE   |    H    |     3 hrs      |        TBD      |       TBD     |
| Deploy Site|    H     |     3 hrs      |        TBD      |       TBD     |
| TOTAL               |          |     35 hrs      |        TBD      |       TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD Model for The Farm Finder](https://drive.google.com/file/d/1wAqUIdMbSBpykNX2cIWjZ7T9ZDjm6SFJ/view?usp=sharing)

<br>

***

## Post-MVP

- Local storage
- Farmer user creation
- Add mapping data
- Add an external API
- Create an option for farmers to have ecommerce options

***

## Code Showcase

- TBD

## Code Issues & Resolutions
-TBD 
