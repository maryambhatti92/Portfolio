import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./views/home/Home";
import Scholarship from "./views/scholarship/Scholarship";
import Team from "./views/team/Team";

function App() {
  return (
    <>
      <Layout>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="scholarship" element={<Scholarship />} />
            <Route path="team" element={<Team />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </Layout>
    </>
  );
}

export default App;
