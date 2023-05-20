import React, { Suspense } from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
//import AllQuotes from "./pages/AllQuotes";
//import QuoteDetail from "./pages/QuoteDetail";
// import NewQuote from "./pages/NewQuote";  Use Lazy since thats better for production
//import Layout from "./components/layout/Layouot";
//import NotFound from "./pages/NotFound";
import LoadingSpinner from './components/ui/LoadingSpinner';



const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NewQuote = React.lazy(() => import('./pages/NewQuote')); 
const Layout = React.lazy(() => import('./components/layout/Layouot'));
const NotFound = React.lazy(() => import('./pages/NotFound')); 
const AllQuotes = React.lazy(() => import('./pages/AllQuotes')); 
//downlaoding code only when needed
//but while its downloading, we need fallback content to be shown!


function App() {

  //using exact prop, to stop it from ignoring sub-pages
  //creating a not found page, byseting route path='*', which all other urls no specified goes to Not found page

  //Suspense tag is needed when using .lazy(), need falback
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
