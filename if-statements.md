📍If statements:
```javascript
if (/*condition*/) {
  /*code*/
} else if{
  /*code*/
} else {
  /*code*/
}
```
✔️Any variable we create inside {...} will only exist inside the {...}. Because, inside the {} there is a scope. 

✔️Shortcuts for If statements (We can save them in a variable):
<ol>
  <li>Ternary Operator ?: </li>
  <li>Guard Operator && 
  
  If the condition is false, it will stop early and won't run the code on the right(Short-Circuit Evaluation). Value will be false automatically.</li>
  <li>Default Operator ||
  
  If the first condition is true, it will stop early and won't run the code on the right(Short-Circuit Evaluation). Value will be true automatically.
  
  If the first condition is false, it won't stop early, variable will have the second value.</li>
</ol>

```javascript
/*1*/ const variable = /*condition*/ ? /*if code*/ : /*else code*/;
/*2*/ const variable = /*condition*/ && /*code*/;
/*3*/ const variable = /*value(condition)*/ || /*value(condition)*/;
```
