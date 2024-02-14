import Card from "./components/Card";
import banner from "./assets/banner.png";
function App() {
  return (
    <div class="container m-auto">
      <header>
        <h1>Cool Merch Store</h1>
      </header>
      <img class="rounded-md" src={banner} alt="site banner" />
      <div class="grid grid-cols-4 gap-10 my-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
