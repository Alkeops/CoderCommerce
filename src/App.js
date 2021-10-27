import { NavBar } from "components/organism"; //Para este tipo de importaciones ver el archivo jsconfig.json

//La importación de react ya no es necesaria desde la version 17 pero se puede poner si asi lo quieren.
function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
