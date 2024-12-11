import Filter from "./components/Filter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import SignOut from "./pages/SignOut";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Filter />
      <Table />
    </main>
  );
}

export default App;

