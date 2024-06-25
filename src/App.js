import React from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; // Import theme
import 'primereact/resources/primereact.min.css';         // Core CSS
import 'primeicons/primeicons.css';                       // Icons
import 'primeflex/primeflex.css'; 

function App(){
    return(
    <div>
        <header className='head'>
          <h1>Prime React</h1>
          <Button label="click me" icon="pi pi-check" />
        </header>
    </div>
    )
}
export default App;