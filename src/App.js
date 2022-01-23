import GoogleLogin from "react-google-login";
import FormComponent from "./components/FormComponent";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <div className="card-body">
            <div className="form-group">
              <FormComponent />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
