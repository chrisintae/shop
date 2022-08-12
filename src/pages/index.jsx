import { Grid } from "../Components/Product/Grid";
import styles from "../assets/styles/_home.module.sass";

const Home = () => {
  return (
    <div className={`wrapper`}>
      <div className={`container`}>
        <h1>midnight ramen club</h1>
      </div>

      <div>
        <Grid data={gridItemsData} />
      </div>
    </div>
  );
};

export default Home;

const gridItemsData = [
  {
    path: "shirt",
    name: "shirt",
  },
  {
    path: "crew",
    name: "crew",
  },
  {
    path: "pants",
    name: "pants",
  },
  {
    path: "socks",
    name: "socks",
  },
  {
    path: "shoes",
    name: "shoes",
  },
];
