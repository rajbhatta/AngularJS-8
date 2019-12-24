# Heading 1 # Major steps to integrate Bootstrap to Angular 8 Project
First, navigate inside your project’s root folder:

Markup :  `code()`
$ cd bootstrap-angular


Next, install Bootstrap 4 and jQuery from npm:

$ npm install --save bootstrap jquery

modify angular.json as given below:


"styles": [
      "src/styles.css", 
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ]
