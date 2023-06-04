import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};


const QuoteList = (props) => {


  const history = useHistory(); //so you can change the url
  const location = useLocation(); //so you can get the current url

  const queryParams = new URLSearchParams(location.search); //get query params set

  const isSortingAscending = queryParams.get('sort') === 'asc'; //keyword to get the specific query parameters with sort

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending); 
  //calling function that sorts all quotes, based on asc or desc query params
  //gives back array of objects


  const changeSortingHandler = () => {

    //another way to write the code below, but more readable! 
    history.push({
      pathname:location.pathname, 
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`,
    })
    //history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc' : 'asc')}`); //we are changing the url to include query parameters
  }

  const refreshHandler = () => {
    window.location.reload();
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}> Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
        <button onClick={refreshHandler}>Refresh</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
