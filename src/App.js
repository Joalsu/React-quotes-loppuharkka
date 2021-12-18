import "./styles.css";
import ValueSection from "./components/ValueSection";
import WordFilter from "./components/WordFilter";
import AddQuotes from "./components/AddQuotes";
import QuotesList from "./components/QuotesList";

function App() {
  return (
    <div>
      <div className="Header">
        <h1>Kayne Oneliners</h1>
      </div>

      <div className="Info">
        <AddQuotes />
        <WordFilter />
        <ValueSection />
      </div>

      <div className="QuotesBox">
        <QuotesList />
      </div>
    </div>
  );
}

export default App;
