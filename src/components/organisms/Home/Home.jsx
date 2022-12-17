import { useState } from "react";
import Deduction from "../../molecules/Deduction";
import Income from "../../molecules/Income";
import Welcome from "../../molecules/Welcome";

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

  return (
    <div>
      <div style={{ display: step === steps.one ? "block" : "none" }}>
        <Welcome handleClick={scrollToIncomePage} />
        <Income id={idList.income} handleClick={() => setStep(steps.two)} />
      </div>

      {step === steps.two && (
        <Deduction
          handleBack={goToIncomePage}
          handleClick={() => alert("In Progress")}
        />
      )}
    </div>
  );
};

export default Home;
