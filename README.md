
## Vue Js

### Vue as a flavour

- Add Vue Js library in main HTML document
- Create a vue element 
```js
    Vue.createApp({
        // 1. A data function that returns an object.
        data() 
        {
            return {
                tasks: [],
                enteredTask: "",
            };
        },
        // 2. A Methods / Functions Object or Key-Value pair
        methods: {
            addTask() {
                this.tasks.push(this.enteredTask);
            }
        }
    });
```
- Bind the Vue object with a HTML element
```js
    Vue.createApp({
        // Data, Methods, Hooks ...
    })
    // Vue element id
    .mount("#app");

    // OR
    const app =Vue.createApp({
        // Data, Methods, Hooks ...
    });
    app.mount("#app");

```

### Essentials

- To output / render any Javascript expression {{ variable Or if(a==b) ? a : b }}
- v-html directive is use to render a string as HTML. Avoid it to prevent XSS.
- v-bind:attributeName For setting value of an attribute. i.e; v-bind:href="url" OR :href="url"
- v-model="propertyName" Two way binding. Shortcut for v-bind.
- methodName($event, arg1)

```js
    // Push items in array
    this.tasks.push({task});    // It can be object, string or any other data type

    // Remove item in an array
    // Remove 1 element at 'index'
    this.tasks.splice(index , 1);
```

#### Conditional Rendering

```html
    <!-- Pro Tip: -->
    <!-- v-show only makes element hidden "display: none" -->
    <!-- Use this only for visibility purposes -->
    <p v-show="test.length === 0"> Test is empty. </p>

    <!-- Or if-else -->
    <!-- This will not render the element in first place -->
    <p v-if="test.length === 0"> Test is empty. </p>
    <p v-else-if="test.length === 1"> Test has something. </p>
    <p v-else="test.length === 0"> Test is not empty. </p>
```

#### Rendereing List

```html
    <ul>
        <li v-for="task in tasks"> {{ task.name }} </li>

        <!-- Get index or key of an item -->
        <!-- key is a unique identification of each item it's default in HTML not native for Vue Js -->
        <li v-for="(task, index) in tasks" :key="index"> {{ task.name }} </li>

        <!-- Loog through a range of number. 1 to 10 -->
        <li v-for="num in 10"> {{ num }} </li>
    </li>
```

#### Styling

- Inline Styling
```html
    <p v-bind:style="border-color: red;" ></p>
    
    <!-- OR -->
    <p :style="border-color: red;" ></p>
    
    <!-- Conditional Style -->
    <p :style="{ borderColor: isSelected ? 'red' : '' }" ></p>

```

- Class Styling
```html
    <p v-bind:class="isSelected ? 'active' : '' "></p>

    <!-- class 'contentA' added by default then 'active' will be added when isSelected becomes true -->
    <p v-bind:class="{ contentA:true, active: isSelected }"></p>
```

#### Events
- v-on shorthand is @
- v-on:eventName; eventName inclue all the events for HTML elements
- v-on:click or @click
- v-on:input => Method(evt) => event.taget.value => To get input value.
- v-on:submit.prevent
- v-on:keyup.enter == When enter key pressed.
- We can add multiple events inside a single HTML element.

<!-- Pro -->
- @click.stop  This will stop propagation of event and only remains there.

#### Computed Properties
- Are just like methods, but they only invocked when their dependency change.
```js
// Define in the same hierarchy as of 'data' or 'methods'
computed: {
    // Mostly it's methods used as data properties to return some content
    // This method will invoke whenever 'firstName' or 'lastName' changes AND once initially
    // It will watch all properties used or referenced within this method
    fullName() {
        return this.firstName + " " + this.lastName; 
    }
}

// To use computed properties we can not add () after
{{ fullName }}
```

#### Watchers
- 
```js
    data: {
        name: "",
    },
    watch: {
        // It can watch only one attribute at a time
        // It's method has same name as it has in data
        // We don't use to to return a modified value instead here we write any logical code.
        name(latestedValue) {
            this.fullName = "Dr. "+value;
        }
    }
```

#### 'this' keyword
- Refer to Vue object and Vue also merge data attributes/values with 'this' keyword



#Vue CLI

## Setup
1. Install Node - check node -v
2. Install Vue CLI globally
	- npm install -g @vue/cli

## Setup Vue Project
1. Install Vue
	- vue create vue_project		// this "vue" we get via Vue CLI
	- Open the folder code .

## Basics
- We will import the things we need from "Vue" library then use it like;
i. import { createApp } from 'vue'		// grabs 'createApp' function from 'vue' lib in node_modules
ii. import App from './App.vue' 	// import main "Vue" component and mount it to root id "#app" - Root Component for SPAs
iii. main.js is the starter point for Vue app

### Vue Component
- Every Vue component contains; 1.Template (mand), 2.Script(optional), 3.Style(optional)

### Vue Styles
- <style></style> 	// apply to all components, as injected in header
- <style scoped></style> 	// apply to only selected component, also injected in the header: Scoped Global CSS

### Run Vue Project
- To Install dependencies: npm install
- To run: npm run serve

### Template Refs
- ref="testRef"		// user this ref to manipulate elements
- in js this.$refs.testRef

## Vue Props
- To avoid data inconsistency in child compnents. Always use/declare parent component's data 
- Passing data from parent components to child or nested components.
- Send prop => <Modal username="malikateeq" />
- Accept Prop => props: ['username']

## Custom Events from child components. i.e; close Modal

```js
	// Child Component Event Emit
	closeModel(){
		this.$emit('closeItNow')

		// Pass data to events
		this.$emit('closeItNow', [12.51])
	}
```

```js
	// Parent Component Event Listening
	<Modal @closeItNow="closeMyModal">

	closeMyModal(){
		// code ..
	}
```

## Event Modifiers
```js
	@click.modifierX="func"

	@click.right="func"	// only call func on mouse right click

	// Modifiers
	self, right, left etc. 
```

## Vue Slots
- Are design to pass Vue Template to components

```js
	// Parent Component
	<Modal>
		<h1> This will be in slot content <h1>
		<p> A long paragraph!! </p>
	</Modal>
```

```js
	// Child Component
	<template>
		// code..
		<slot> </slot>	// The slot will render here.
		// code ..
	</template>
```

### Vue Names Slots 

```js
	// Parent Component
	<Modal>
		<template v-slot:links> 
			<a href="#">Abc</a>
			<a href="#">Xyz</a>
		</template>
		<h1> This will be in slot content <h1>
		<p> A long paragraph!! </p>
	</Modal>
```

```js
	// Child Component
	<template>
		// code..
		<slot> </slot>	// The slot will render here.
		// code ..

		// Use named slots 
		<slot name="links"></slot>
	</template>
```

### Vue Teleport

```js
    <teleport to=".modals">	// .modals class
      <Modal>
        <!-- code -->
      </Modal>
    </teleport>
```

## Vue Lifecycle Hooks

Created => Mounted to DOM => Updated => Destroyed

0. beforeCreate()	// No access to data or anything
1. created()	// After component created, no data only template
2. beforeMount() 	// Just before mounted to DOM. Access data, fetch data.
3. mounted()	// Active on DOM
4. beforeUpdate()	// before data re-rendered to the DOM
5. updated()	// After all updated are reflected to the DOM
6. beforeUnmount() 	// Before component remove from the DOM
7. unmounted() 	// After component remove from the DOM - For cleanups

## Vue Router

- Vue intercepts the request and check URL and inject compnents according to routes. 
- install vue router: select Router when installing vue project
- 

```js



```