import { useState } from "react";
import Deduction from "../../organisms/Deduction";
import Income from "../../organisms/Income";
import Welcome from "../../molecules/Welcome";
import Dashboard from "../../organisms/Dashboard";
import { useSelector } from "react-redux";

const idList = {
  income: "incomeCard",
};

const steps = {
  one: 1,
  two: 2,
  three: 3,
};
const Home = () => {
  const [step, setStep] = useState(steps.one);
  const state = useSelector((state) => state);

  // console.log("State", state);
  const scrollToIncomePage = () => {
    let element = document.getElementById(idList.income);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const goToIncomePage = () => {
    setStep(steps.one);
    window.location.href = `#${idList.income}`;
  };

  const goToDashboard = () => {
    setStep(steps.three);
    window.location.href = `#${idList.income}`;
  };

  return (
    <div>
      <div style={{ display: step === steps.one ? "block" : "none" }}>
        <Welcome handleClick={scrollToIncomePage} />
        <Income id={idList.income} handleClick={() => setStep(steps.two)} />
      </div>

      {step === steps.two && (
        <Deduction handleBack={goToIncomePage} handleClick={goToDashboard} />
      )}
      {step === steps.three && <Dashboard handleBack={goToIncomePage} />}
    </div>
  );
};

export default Home;
