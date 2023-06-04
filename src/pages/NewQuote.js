import { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import {addQuote} from '../lib/api';


const NewQuote = () => {
    
    const {sendRequest, status} = useHttp(addQuote); //using a fnction pre-made, gives back object

    const history = useHistory(); 
    //use history hook

    useEffect(() => {
        if(status === 'completed'){
            history.push('./quotes');
        }
    }, [status, history]);

    const addQuoteHandler = quoteData  => {
        sendRequest(quoteData);
        history.push('/quotes');
    }

    return (
        <div>
            <QuoteForm isLoading={status ==='pending'} onAddQuote={addQuoteHandler}/>
        </div>

    )

}

export default NewQuote;