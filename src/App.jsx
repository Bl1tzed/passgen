import PasswordInputShow from "./PasswordInputShow";
import Properties from "./Properties";
import ButtonGroupShow from "./ButtonGroupShow";
import { useRef } from "react";
import PasswordHistory from "./PasswordHistory";
import PasswordProvider from "./PasswordContext";
export default function App() {
  //const password = useRef(null);
  const passwordArrayLocal = useRef(null);

  return (
    <>
      <div id="propertiesBox">
        <h1>Password Generator</h1>
        <Properties />
        <PasswordProvider>
          <PasswordInputShow />
          <ButtonGroupShow passwordArrayLocal={passwordArrayLocal} />
        </PasswordProvider>
      </div>
      <div id="historyBox">
        <PasswordHistory passwordArrayLocal={passwordArrayLocal} />
      </div>
    </>
  );
}
