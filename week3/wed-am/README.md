# DB Relationships Review and Complex joins

## Demo Agenda

* Walkthrough of the existing app
* Add a new "rentals" table
* New DB queries and viewing of data

## Walkthrough
- existing tables
- routes
- existing join
- a separate query for movieLovers in the movies routes

## Add a new "rentals" table
- Start with DB diagram
- Migration
- One seed to test (numbered, cause order matters)
  - add to the clean file (bottom first, fail, then top)

## New DB queries and viewing of data

- Models
- DB functions file - getAllRentals
- Make new hbs view
- Update route

## Adding new rentals

- New Post route
- Form on list-rentals.hbs (action, method)
- Post with IDs in text inputs (HTML validation)
- addNewRental db function
- Build dropdowns from query data

<!-- Initial dbdiagram.io markdown

Table movies {
  id integer [primary key]
  title varchar
  year integer
}

Table renters {
  id integer [primary key]
  name varchar
  phone_num varchar
  fav_movie_id integer
}

Ref: renters.fav_movie_id > movies.id // many-to-one -->


<!-- Proposed additional dbdiagram.io markdown

Table rentals {
  movie_id integer
  renter_id integer
}

Ref: rentals.movie_id > movies.id
Ref: rentals.renter_id > renters.id -->
