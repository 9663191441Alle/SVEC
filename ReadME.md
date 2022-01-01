### Front_end Technologies


- HTML
- CSS
- JavaScript
- BootStrap framework
- Angular Framework
- React Js


### Backend technologies


- Node.js
	- express.js
	- nodemoon
	- cors
	- dotenv
- PHP
- c#
- Java


### databases
- MongoDb
- Mysql
- SQLite
- Firebase
- postgressql
- oracle


- VCS  (Source code management)
	- Distributed VCS
		- Git,Mercurial
	- Remote(central) VCS
		- Github,bitbucket
### git
- git init
- git add filename
- git add filename3 filename4 filename100
- git add . or git add  --all
- git status
- do git configurations( set user.name and user.email)
- commit data with commit message
- push the code into github


### HTML5
- Hyper Text Markup Language
- Semantic elements
	- header
	- section
	- article
	- aside
	- footer
	- table

- Blocklevel elements
	- h1 to h6
	- p
	- div
	- all semantic elements
	- Text will start from new lines

- Inline elements
	- span
	- img
	- a
	- nav
	- form
	- input
	- testarea
	- legend
	- sup
	- sub

##### reference Links
- [Flaticon]
- [colorcodes]
- [contrast color](https://webaim.org/resources/contrastchecker/)

Task :
=====
- Audio
- video
- Canvas
- progress
- datalist
- meter
- select

### CSS
+ cascading Style Sheets
+ Types of CSS
	- inline CSS
	- Internal CSS
	- External CSS
+ syntax:

'''
selector {
	 css properties
}
'''

### Selectors
+ simple selectors
	- universal selector (*)
	- by element name
	- Grouping  selector (,)
	- class selector (.)
	- id selector (#)

+ Combinators
	+ Descendent selector ( )
	+ child selector (>)
	+ Adjacent sibling selector (+)
	+ General sibling selector (~)
+ Pseudo class selector
+ Pseudo element selector
+ Attribute selector


### BoxModel

+ margin
+ border
+ padding
+ width

#### Flex-box
+ display
	- none
	- inline
	- block
	- inline-block
+ position
	-static
	-relative
	-absolute
	-fixed
	-sticky
+ align content
+ align_items
+ align-self

### Media Quries

- extra small devices
	- max-width:600px
- small devices
	- min-width:600px
- medium devices
	- min-width:768px
- large devices
	-  min-width:992px
- extra large devices
	- min-width:1200px


'''
@media only screen (max-width:320px) and (max-width:500px){
	css code
}
'''

### Bootstrap 4.6

- It is a css framefork
- Types of modes
	- offline
	- online
		- CDN links
+ background-color-bg
+ text-white

+ margin in bootstrap (m-* (0.5))
	- 0 --> 0rem
	- 1 --> 0.25rem (4px)
+ margin-left (ml-3)
+ margin in all directions (m)
+ margin-left (ml)


+ colors
	- primary
	- secondary
	- info
	- success
	- warning
	- danger
	- light
	- dark
	- white

+ we can use color classes for
	- Buttons (btn btn-primary)
	- text (text-white)
	- background (bg-primary)
	- alerts (alert alert-primary)
	

- module(collection of function and classes)
- package(collection of module)
- library(collection of packages)
- framework(collection of library)
 + module --> package -->library --> framework

+ grid system
	-  col-sm-12

#### javascript

- In 1995 ' brenden Eich ' introduced javascript (ES-262)
+ Javascript loosely touple and dynamic language
+ it is a text based programming language and we can run 
  in client-side and server-side(Node.js) for dynamic web applications
- ECMA (ES-6)
	- let & const
	- map()
	- arrow function
	- classes
	- spred operator
	- rest parameter
+ Datatypes
	- number
	- BigInt (2^53-1)
	- String 
	- boolean
	- undefined
	- Null
	- object
	- Arrays
+ variables
	- var,let&const
	- scope
		- function level -->var
		- block level--->let& const
	- Redefine -->by var & let key word
	- Redeclare -->var keyword
+ objects


### Alerts

+ To generate Alert notification
	- alert
	- prompt
	- confirm

+ console statements
	- console.log()
	- console.info()
	- console.warn()
	- console.error()

+ Spread operator
	- to change array elements from one array to another
	,,,
	    ...variable
	,,,
+ Rest parameters
	+ to handle function parameters
	,,,
	  ...parameter
	,,,

+ Destructuring of array & objects


+ Functions
	- function with functionname
	```
	 function demo(x,y){
		 return x+y
	 }
     demo();
	```
	- Anonymous function
	```
	 let demo=function(x,y){
		 return x+y
	 }
	 ```

	- Arrow function
	

+ for-in
	- index values
+ for-of
	- elements in the array
+ for-each

+ map()

### dom
  - Document Object Model
  - document
  - history
  - window
  - navigator


#### JSON
+ JavScript Object Notation
	- to exchange information between application and server

```
{
	"name":"Alle Chamundeswari",
	"salary":"17LPA",
	"mobile":8374455440
}

```
+ Ajax call or promises (fetch API) or axioms


#### Front-end with ReactJs


##### ReactJS Features
+ It is a library
+ It follows component based Architecture
	- Function component
	- Class component
	- Pure Component
	- Higher Order Component
+ It provides virtual DOM
+ unidirectional data flow
+ It provides JSX(Javascript and XMl)
+ Single page Application


+ props

	- to pass data from one component to another component we will use
	props
	- prop are immutable

+ UnionBank
	- AndhraBank(Functional)
	- CorporationBank(Class)


+ States

	- In react to maintain information we will use States
	- we can maintain states in  class component only ( Before react 16.8 version)
	- to take state in react , try to create constyructor  above render method and inside of class component.
	- use `rconst` snippet

	```
	constructor(){
		super();
		this.state={

		}
	}
    ```



#### Hooks





+ redux

+ project Environment setUp
	- [DownloadVisualStudioCode]
	- [DownloadNode.Js] (https://nodejs.org/en/download/)
	- install nodejs and check versions of `node` and `npm`
		- `node -v`
		- `npm -v`
	- `webpack` and `babel`
	- `create-react-app`
		- `npm install create-react-app`
			- `create-react-app projectname`
	- `npx create-react-app appname`


+ index.html
+ index.js
+ App.js 
	+ Indexpage
		- nav.js
		- body.js
		- footer.js

		+ Home PAge(Home.js)
			- nav
			- body
			- footer
		+ login.js
		+ Register
		+ About
		+ contact
