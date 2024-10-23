# Alumor Web Services - Aluminum work in central Israel

This is a website built using *Express.js* to create a web services for an independent company called "Alumor"
by Ofer Damari.
This company is a company that makes Aluminum work, such as windows, shutters, showers and more.

As for now, this app only has backend - used with *Node.js* platform and *Express.js* module.

We have different endpoints such as:
* http://localhost:8080/api/main/ - which gives information on Aluminum work.
* http://localhost:8080/api/about/ - which gives information about Ofer Damari's work.
* http://localhost:8080/api/inquiry/create - which let the customer add an inquiry for what he needs from the company/
* http://localhost:8080/api/admin/login - which only admin (AKA Ofer) can login to see all inquiries has been made by customers.
* http://localhost:8080/api/admin/dashboard - endpoint that gives all the inquiries - Whether they have been treated or not yet.
* http://localhost:8080/api/admin/dashboard/:id - admin can search id for a simple inquiry (id can be first name, email or phone number), and it will search if we have this type of inquiry in database.

The elements that are being used are:
* Express.js
* Node.js
* MongoDB
* JWT