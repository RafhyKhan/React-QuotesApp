import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    //automatic quotation adding
    const enteredAuthor = authorInputRef.current.value;
    var enteredTextValue = textInputRef.current.value;
    enteredTextValue = String(enteredTextValue)

    if (enteredTextValue.charAt(0) != `"`) { 
      enteredTextValue = `"` + enteredTextValue; 
    }

    if (enteredTextValue.charAt(enteredTextValue.length-1) != `"`) {
      enteredTextValue = enteredTextValue + `"`;
    } 

    const enteredText = enteredTextValue;
    // Validate text here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  
  const finishEnteringHandler = () => { //User has completed form, must add quote and leave
    setIsEntering(false); //user left form
  }

  const formFocusedHandler = () => {
    setIsEntering(true);  //the user has entered the form

  }

  return (
    <Fragment>
      <Prompt when={isEntering} message={(location) => 'Are you sure you want to leave? All your entered data will be lost!'} />
      <Card>
        <form onFocus={formFocusedHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text </label>
            <textarea id='text' rows='5' ref={textInputRef} ></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
