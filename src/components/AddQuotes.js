import { useState } from "react";
import useQuotes from "./useQuotes";

const AddQuotes = () => {
  const { quoteAdd } = useQuotes();
  const { deleteQuote } = useQuotes();

  const [quoteText] = useState();

  const addQuote = () => {
    let q = { quoteText };
    quoteAdd(q);
  };

  const deleteClick = () => {
    deleteQuote({ quoteText });
  };

  return (
    <div id="buttons">
      <button className="btn" onClick={addQuote}>
        Fetch 1 quote
      </button>
      <button className="btn" onClick={deleteClick}>
        Delete all quotes
      </button>
    </div>
  );
};

export default AddQuotes;
