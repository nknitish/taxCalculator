import React, { useState } from "react";
import { Button } from "../../atom/Button/Button";
import { Card } from "../../atom/Card/Card";
import { InputField } from "../../atom/InputField/InputField";

const Home = () => {
  const [name, setName] = useState(108);
  return (
    <div>
      <Card>
        <InputField
          placeholder="Enter Gross Salary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField placeholder="Enter Rol No " />
        <Button text={"Submit"} onClick={() => alert("Done ")} />
      </Card>
    </div>
  );
};

export default Home;
