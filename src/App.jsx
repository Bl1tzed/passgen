import PasswordInputShow from './PasswordInputShow';
import Properties from './Properties';
import ButtonGroupShow from './ButtonGroupShow';
import { useRef } from 'react';
import PasswordHistory from './PasswordHistory';

export default function App() {
  const password = useRef(null)
  console.log(password)
  const passwordArrayLocal = useRef(null)
  return (
    <>
      <div id="propertiesBox">
        <h1>Password Generator</h1>
        <Properties />
        <PasswordInputShow password={password} />
        <ButtonGroupShow password={password} passwordArrayLocal={passwordArrayLocal} />
      </div>
      <div id='historyBox'>
        <PasswordHistory passwordArrayLocal={passwordArrayLocal}/>
      </div>
    </>
  )
}




