📍Modules:

✔️Better way to organize our code

✔️To get a variable out of a file:

1️⃣ Adding type="module" attribute:
```html
<script type="module" src="<!--file path-->"></script>
```
2️⃣ Export:

Writing `export` to the variable we want to access
```javascript
export const variableName = /*value*/;
```
3️⃣ Import:

Getting the variable we want to access
```javascript
import {variableName} from /*file path*/;
```
*When getting a file from out of the other folder:
```javascript
'../otherFolder/file/'
```
*When getting a file out of the folder located in the current folder:
```javascript
'./folderName/file/'
```
✔️For avoiding name conflicts:
```javascript
import {variableName as myVariable} from /*file path*/;
```
✔️Importing everything:
```javascript
import * as moduleName from /*file path*/;

//For accessing:
moduleName.variableName      //getting a variable
moduleName.functionName();   //getting a function
```
