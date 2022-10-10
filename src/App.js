import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/cards/Card";
import data from "./components/data/data";
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <div className="main">
        {data.map((item) => (
          <Card
            key={item.id}
            name={item.title}
            info={item.desc}
            img={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
