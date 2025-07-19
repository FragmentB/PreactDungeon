import { handleQuit } from '../../utils/platform';
import { GameButton } from '../../components/gameButton';
import type { FunctionalComponent } from 'preact';
import { useLocation } from 'preact-iso';
import './townMenu.css'

const TownMenu: FunctionalComponent =() => {
    const { route } = useLocation();
    return (
        <div className="town-menu">
            <div className="town-image">
                <div className="town-panel">
                    <div className="town-menu-buttons">
                        <GameButton onClick={() => route('/guild')}>Guild</GameButton>
                        <GameButton onClick={() => route('/shop')}>Shop</GameButton>
                        <GameButton onClick={() => route('/home')}>Home</GameButton>
                        <GameButton onClick={() => route('/save')}>Save</GameButton>
                        <GameButton onClick={() => route('/load')}>Load</GameButton>
                        <GameButton onClick={() => route('/dungeon')}>Library</GameButton>
                        <GameButton onClick={() => route('/options')}>Options</GameButton>
                        <GameButton onClick={handleQuit}>Quit</GameButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TownMenu;