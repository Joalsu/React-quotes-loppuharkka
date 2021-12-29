import useQuotes from "./useQuotes";

const ValueSection = () => {
  const { totalQuoteCount } = useQuotes();

  return (
    <div>
      <p>Total quote count: {totalQuoteCount}</p>
    </div>
  );
};

export default ValueSection;
