import "./App.css";
import { OtpComponent } from "./OtpComponent";
function App() {
  return (
    <div className="container">
      <h1>React OTP</h1>
      <OtpComponent digits={5} />
    </div>
  );
}
export default App;
