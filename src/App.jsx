import './App.css';
import Dock from "./components/Dock";
import Ribbons from './components/Ribbons';

import { VscHome, VscProject, VscNotebook, VscMail } from "react-icons/vsc";

const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscProject size={18} />, label: 'Projects', onClick: () => alert('Projects!') },
    { icon: <VscNotebook size={18} />, label: 'Blog', onClick: () => alert('Blog!') },
    { icon: <VscMail size={18} />, label: 'Contact', onClick: () => alert('Contact!') },
];

function App() {
    return (
        <>
            <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
                <Ribbons
                    baseThickness={30}
                    colors={['#FC8EAC']}
                    speedMultiplier={0.5}
                    maxAge={500}
                    enableFade={true}
                    enableShaderEffect={true}
                />
            </div>

            <Dock
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
        </>
    );
}

export default App;
