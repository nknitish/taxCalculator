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
          placeholder="Ente nae"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField placeholder="Enter Rol No " />
        <Button text={"Hello"} onClick={() => alert("Hellow ")} />
      </Card>
    </div>
  );
};

export default Home;
