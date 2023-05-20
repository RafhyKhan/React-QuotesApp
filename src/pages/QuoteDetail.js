import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";




const QuoteDetail = () => {
    const match = useRouteMatch(); //meant to you can get the object containing the value of the current URL
    const params = useParams();

    const { quoteId } = params;

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);//quote from database


    //to pull from databse when start website
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    //const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    //find quote number coressponing to id display in home pages

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        )
    }

    if (error) {
        return (<p className='centered'>{error}</p>)
    }



    //ERROR HANDLING: If user inputs a wrong URL wrong id, than shown.
    if(!loadedQuote.text) {
        return (<p>No Quote Found</p>)

    }

    //we can make dynamic route page links using `` and params.____id
    //we have a Nested Route
    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path ={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    
    
    )
}

export default QuoteDetail;