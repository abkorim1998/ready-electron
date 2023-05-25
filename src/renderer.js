import { ipcRenderer, shell } from 'electron';
import './style.css';

(async () => {
    
    // database
    // -----------------------------------------------
    // get user data path from main process
    const userDataPath = await ipcRenderer.invoke('my-method');
    ipcRenderer.on('message', (e, x) => {

        console.log(e, x)
        
    });
    
    
})();