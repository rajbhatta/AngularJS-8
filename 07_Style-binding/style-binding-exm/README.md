## Style Binding & NgStyle in Angular 8 ##
**Sample 1:**
```html
<p [style.background-color]="'darkorchid'">
  Quite something!
</p>
```

**Sample 2:**
NgStyle for multiple values

Simple style binding is great for single values, but for applying multiple styles the easiest way is to use NgStyle:
```html
<p [ngStyle]="myStyles">
  You say tomato, I say tomato
</p>
```
And then myStyles would be a property in the component that contains an object with css property names as the keys, like this:
```css
myStyles = {
'background-color': 'lime',
'font-size': '20px',
'font-weight': 'bold'
}
```
**Sample 3:**
it could be provided inline like this:
```html
<p [ngStyle]="{'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'}">
  You say tomato, I say tomato
</p>
```



**Sample 4:**
Or the object can be the return value of a method:
```html
<p [ngStyle]="setMyStyles()">
  You say tomato, I say tomato
</p>

setMyStyles() {
  let styles = {
    'background-color': this.user.isExpired ? 'red' : 'transparent',
    'font-weight': this.isImportant ? 'bold' : 'normal'
  };
  return styles;
}
```

More Info: https://alligator.io/angular/style-binding-ngstyle-angular/
