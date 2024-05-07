import { useState } from "react";
import "./styles/App.css";
import Layout from "./components/layout";
import Card from "./components/card";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

function App() {
  return (
    <Layout>
      <div>
        {/* <Card></Card> */}
        {/* <Login></Login> */}
        <Register></Register>
      </div>
    </Layout>
  );
}

export default App;
