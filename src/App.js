import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");

  return (
    <div className="App">
      <p>First React Test case</p>
      <h1>Test click Event With Button</h1>
      <button onClick={() => setData1("Updated Data")}>Update Data</button>
      <h1>{data1}</h1>

      <p>Moraj</p>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.data)}
        placeholder="Enter User Name"
        name="username"
        id="user"
      />
      <br />
      <img
        alt=""
        title="Test Logo"
        src="https://img.freepik.com/premium-vector/free-vector-beautiful-flying-hummingbird-design-element-banners-posters-leaflets-brochur_1009653-1.jpg"
      />
    </div>
  );
}

export default App;
