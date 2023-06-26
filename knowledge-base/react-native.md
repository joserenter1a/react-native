# Directory of Notes on React-Native
## Advantages of React-Native
- Can write a single codebase for mobile applications for both iOS and Android
- Popularized by its usage of native components, which results in better user experience and better efficiency
- Used by big companies such as Meta, Airbnb, and more
- On top of cross platform compatibility, React-native supports
    - **Hot Reloading**
       - lets you see the changes you make in real-time
       - making the development process faster & more efficient
    - **Strong community support**
        - ensures the frameowrk continues to improve
## Expo
- similar to create-react-app, or vite, except for react-native
- provides many tools & services that simplify the development process
- Helps build apps more easily
- one of the biggest benefits is configuration of development and environment and native dependencies
- offers pre-built components and APIs for navigations, gestures, camera, maps, and more
- Expo Router takes a different approach to handling navigation by using a file-based routing system that is simpler and more intuitive

## React-Native vs React
- When using React-native, you will use javascript, but instead of rendering HTML elements, you will be rendering native mobile components
```
import React from 'react'
import {View, Text} from 'react-native'

const App = () => {
    return (
        <View>
            <Text>Hello World!</Text>
        </View>
    );
}
``` 
- React native uses the `<Text>` component 
- can style it using the same CSS style syntax, as in React
`<Text
 style = {{fontSize: 24, color: 'blue' }}> Hello World</Text>
`
- The `<View>` is used to create a container or "view" for the other components
- Think of it as a box or container that holds other components
- Similar to the `<div>` element in HTML, but with some added functionality specific to mobile apps
- Often used to create layout structures for other components
- uses flexbox layout by default, which makes it easy to control how its child components are laid out within the container
## Interactivity
- React Native provides support for touchable components that can serve as buttons, links, or other interactive elements
- In React-Native, buttons are referred to as `TouchableOpacity`
- If you're looking to create a button or another interactive element that fades in opacity when pressed, you can use the `TouchableOpacity` component
- Think of it as a cousin to the Button component in React, but with more customization and flexibility
```
import React from 'react'
import {TouchableOpacity, Text} from 'react-native';

function MyButton(props)
{
    return (
        <TouchableOpacity onPress ={props.onPress}>
         <Text>{props.label}</Text>
        </TouchableOpacity>
    );
}
```

- An `ActivityIndicator` component is used for showing a spinner or loading indicator in your app
- you ca fully customize the size & color of the spinner by setting the size & color properties

## Lists and Navigation
- A `Flatlist` is used for rendering a long list of items that need to be scrolled efficiently
- Similar to a `Map function` in React, but has extra features like
    - Optimized scroll performance
    - Individual item separation
- For smooth scrolling of larger lists, go with a `Flatlist` component
- For smaller lists, `Map function` can do the job
`ScrollView` is like a magic box that can hold multiple components and views, providing a scrolling container for them
- allows you to easily navigate a list of itmes, or a large amount of content in your app
- by using `ScrollView` you can make sure that users can easily explore all the content, making the app more intuitive and user-friendly
- `SafeAreaView` provides a safe zone to render your app's content without being covered by the device's hardware features like the notch, home indicator, or status bar
- This ensures that you content is displayed within the visible area, making your app more accessible

## Getting Started
- To quickstart with Expo, use

`npx create-expo-app@latest -e with-router`

## Dependencies 
- Most dependencies are installed, but we need to be able to work with
environment variables, so we run 
`npm install expo-font axios react-native-dotenv`

- to globally install the expo cli package you can run 
`npm install -g expo-cli`

- and then run `expo-cli start --tunnel`

## Environment variables

**Basic setup:**
Inside your `babel.configure.js` file, add the following
```
module.exports = {
  "plugins": [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }]
  ]
}
```
- Then inside of your .env file at the root of your project directory, add your environment variables
- Next you can import the environment variables like this
```
import {ENV_VARIABLE} from '@env'
```