import { useContext, useEffect } from "react";
import { AppContext } from "../app-context";

const useQuotes = () => {
  const [state, setState] = useContext(AppContext);

  useEffect(() => {}, [state.quotes]);

  const fetchQuote = async () => {
    const API_URL = "https://api.kanye.rest/";

    let response = await fetch(API_URL);
    let data = await response.json();

    addQuote(data.quote);
  };

  const addQuote = (quote) => {
    let new_quote = [...state.quotes, quote];
    setState({ ...state, quotes: new_quote });
  };

  const deleteQuote = (s) => {
    let new_quotes = state.quotes.filter((quote) => {
      return !(s.quoteText === quote.quoteText);
    });
    setState({ ...state, quotes: new_quotes });
  };

  return {
    quoteAdd: fetchQuote,
    deleteQuote,
    quotesValues: state.quotes,
    totalQuoteCount: state.quotes.length,
  };
};
export default useQuotes;
