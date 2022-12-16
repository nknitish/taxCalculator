import React, { useState } from "react";
import { Button } from "../../atom/Button/Button";
import { Card, ParentCard } from "../../atom/Card/Card";
import { InputField } from "../../atom/InputField/InputField";
import { Layout } from "../../atom/Layout/Layout";

const Home = () => {
  const [name, setName] = useState(108);
  return (
    <div>
      <Layout>
        <ParentCard>
          <InputField
            placeholder="Enter Gross Salary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField placeholder="Enter Rol No " />
          <Button text={"Submit"} onClick={() => alert("Done ")} />
        </ParentCard>
      </Layout>
    </div>
  );
};

export default Home;
