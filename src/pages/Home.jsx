import Card from "../components/Card";

const Home = () => {
  return (
    <div class="grid grid-cols-4 gap-10 my-4">
      {/* <Card title="Tech Tee" /> */}
      <Card flat={false} rounded={true}>
        <h2>Ninja Tee, black</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          expedita?
        </p>
        <button class="btn">view</button>
      </Card>

      <Card flat={true} rounded={false}>
        <h2>Ninja Tee, white</h2>
        <button class="btn">view</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          expedita?
        </p>
        <p>Only £10</p>
      </Card>
    </div>
  );
};

export default Home;
