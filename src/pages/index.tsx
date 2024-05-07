import { useState } from "react";
import "../styles/App.css";
import Layout from "../components/layout";
import Card from "../components/card";

const Home = () => {
  return (
    <Layout>
      <div>
        <Card></Card>
      </div>
    </Layout>
  );
};

export default Home;
