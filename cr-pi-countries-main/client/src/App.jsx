import { Routes, Route } from "react-router-dom";

import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Create from "./views/create/Create";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
