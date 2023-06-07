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
| Lazy-Loading    | Used lazy-loading in this app with the React Suspense tags, to increase its performance by priotizing components.  |
``` js
      <Suspense fallback={<div className='centered'><LoadingSpinner/></div>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'/>
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes/>
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail/>
          </Route>
          <Route path='/new-quotes'>
            <NewQuote/>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
```
(Check out FULL App.js Code)[https://github.com/RafhyKhan/React-QuotesApp/blob/main/src/App.js]



| Keyword | Description of use |
| ------ | ----------- |
| reducer | Used an http reducer to increase code-reusability. Expescially when dealing with the http requests and dealings which were repetitive |
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

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    };
  }

  return state;
}
```
(Check out FULL use-http.js code)[https://github.com/RafhyKhan/React-QuotesApp/blob/main/src/hooks/use-http.js]



| Keyword | Description of use |
| ------ | ----------- |
| GFirebase    | Used the google firebase as a simple online backend data management for the app |
``` js
const FIREBASE_DOMAIN = 'https://react-http-57c1f-default-rtdb.firebaseio.com';

export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const transformedQuotes = [];


(Check out FULL api.js code)[https://github.com/RafhyKhan/React-QuotesApp/blob/main/src/lib/api.js]
```