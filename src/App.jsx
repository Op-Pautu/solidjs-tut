import Card from "./components/Card";
import banner from "./assets/banner.png";
function App() {
  return (
    <div>
      <header>
        <h1>Cool Merch Store</h1>
      </header>
      <img src={banner} alt="site banner" />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
