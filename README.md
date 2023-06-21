# NAME OF PROJECT 
Hogwarts-Ish (Phase 3 Project)

## Description 
Description

## Visuals (Demo of App)
https://youtu.be/Lpn5gzCd7Cs


## Installation
This project was built with a Sinatra API backend that uses Active Record to access and persist data in a database, which will be used by a separate **React frontend** that interacts with the database via the API.

## Details

For this project:

- Use Active Record to interact with a database.
- There are two models with a one-to-many relationship. One *wizard* to many *spells*.
- The Spells model has create and read actions.
- The Wizards model contains full CRUD capabilities.
  --- Includes all 7 RESTful routes: Index, New, Create, Show, Edit, Update, and Destroy. 
      **Index** /wizards (GET)
      **New** /wizards/new (GET)
      **Create** /wizards (POST)
      **Show** /wizards/:id (GET) 
      **Edit** /wizards/:id/edit (GET)
      **Update** /wizards/:id (PATCH)
      **Delete** /wizards/:id (DELETE)

- Routes in your application (both client side and back end) should follow RESTful
  conventions.
- Use your back end optimally. Pass JSON for related associations to the front 
  end from the back end. You should use active record methods in your controller to grab
  the needed data from your database and provide as JSON to the front end. You
  should NOT be relying on filtering front end state or a separate fetch request to
  retrieve related data.

For example, build a todo list application with a React frontend interface and a
Sinatra backend API, where a user can:



## Getting Started
The frontend and backend for this project are located in the same repository.  The frontend can be accessed by cd-ing into the client folder.  The backend can be accessed from the root directory.

### Backend Setup

To explore the Hogwarts-Ish app, [**Fork and clone**] this repository from the following link to get started:

[fork link]: https://github.com/PhoenixMomof2/Hogwarts-ish.git

Then, run `bundle install` to install the gems.

You can start the server with:

```console
$ bundle exec rake server
```

This will run the server on port
[http://localhost:9292](http://localhost:9292).

### Frontend Setup

The frontend is in a **separate folder** named: client.  To get it running, cd into the client directory and run *npm start* to open the app in the following port:
[http://localhost:3000](http://localhost:3000).


## Roadmap Stretch Goals
1 - While I was hoping to make this a wizards dueling game, I didn't get that far.  For now, this is the starter code to that idea.  Since, wizards have spells and the spells have point values, I know I can get it there with time.
2 - Create instance and class methods to perform different manipulations of the data for increased functionality. 
3 - Add animation.

## Blog Link
https://dev.to/phoenixmomof2/creating-query-methods-active-record-2na4

## Blog Photo Credit
Photo by <a href="https://unsplash.com/@goodfacesagency?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Good Faces</a> on <a href="https://unsplash.com/images/stock/blogging?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

## Resources
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2023 Kandis Arzu-Thompson 

https://static.india.com/wp-content/uploads/2016/11/Harry-Potter-Main-Article-1.jpg

https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBg7bvvrzMvTWupKkiLor-hroosz_OJdsjA&usqp=CAU

