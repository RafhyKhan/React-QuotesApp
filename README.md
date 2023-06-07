# React-Quotes App

[Check out the App Online!](https://react-quotes-app.vercel.app/quotes)

## Description

React Quotes is a ReactJs App with Google Firebase database in use. I used
react-router's routes and useHistory() hooks to make it a multi-page app.
Custom react hooks and reducers were used to increase code-reusability, 
primarily for dealing with the Google Firebase requests and replies.
React suspense tags are used to take use of lazy-loading to speed up the
apps performance.  




## Coding-Keywords Used

| Keyword | Description of use |
| ------ | ----------- |
| react-router   | Used to make the react app muti-paged. I used Route(s) tags for the paths and useHistory for page redirects. |
``` js
function httpReducer(state, action) {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    };
  }
```
| reducer | Used an http reducer to increase code-reusability. Expescially when dealing with the http requests and dealings which were repetitive |
| Lazy-Loading    | Used lazy-loading in this app with the React Suspense tags, to increase its performance by priotizing components.  |
|     | Used the google firebase as a simple online backend data management for the app |
| GFirebase    | Used the google firebase as a simple online backend data management for the app |
