### Major steps to integrate Bootstrap to Angular 8 Project using Angular CLI
First, navigate inside your project’s root folder:
```
 1. $ cd bootstrap-angular
```


Next, install Bootstrap 4 and jQuery from npm:
```
2. $ npm install --save bootstrap jquery
```
Modify angular.json as given below:
```
3. "styles": [
      "src/styles.css", 
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ]
```
