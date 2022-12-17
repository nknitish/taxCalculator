import Income from "../../molecules/Income";
import Welcome from "../../molecules/Welcome";

const idList = {
  income: "incomeCard",
};
const Home = () => {
  const handleClick = () => {
    let element = document.getElementById("incomeCard");
    element.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return (
    <div>
      <Welcome handleClick={handleClick} />
      <Income id={idList.income} />
    </div>
  );
};

export default Home;
