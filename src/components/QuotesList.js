import useQuotes from "./useQuotes";

const QuotesList = () => {
  const { quotesValues } = useQuotes();

  return (
    <div>
      <h2>Quotes</h2>
      <div>
        {quotesValues.map((quote, i) => (
          <div key={i}>
            <p>{quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesList;
