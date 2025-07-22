import { GameButton } from '@components/gameButton';
import { Sprite } from '@components/sprite';
import { handleQuit } from '@utils/platform';
import type { Pos } from '@core/types';

import type { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import { useLocation } from 'preact-iso';

import './townMenu.css'

const TownMenu: FunctionalComponent =() => {

    const locations: Record<string, Pos> = {
        guild: { x: 19, y: 17 },
        shop: { x: 20, y: 25 },
        home: { x: 41, y: 26 },
        save: { x: 40, y: 10 },
        load: { x: 37, y: 14},
        dungeon: { x: 30, y: 35 },
        options: { x: 38, y: 20},
        quit: { x: 22, y: 8 },
        default: {x: 29, y: 17}
    };

    const { route } = useLocation();
    const [spritePos, setSpritePos] = useState<Pos>(locations['default']);
     
    const handleHover = (key: keyof typeof locations) => {
        setSpritePos(locations[key]);
    };

    const resetHover = () => {
        setSpritePos(locations['default']);
    };

    return (
        <div className="town-menu">
            <div className="town-image">
                <div className="town-panel">
                    <div className="town-menu-buttons">
                        <GameButton onClick={() => route('/guild')} onHover={() => handleHover('guild')} onLeave={()=>resetHover()}>Guild</GameButton>
                        <GameButton onClick={() => route('/shop')} onHover={() => handleHover('shop')} onLeave={()=>resetHover()}>Shop</GameButton>
                        <GameButton onClick={() => route('/home')} onHover={() => handleHover('home')} onLeave={()=>resetHover()}>Home</GameButton>
                        <GameButton onClick={() => route('/save')} onHover={() => handleHover('save')} onLeave={()=>resetHover()}>Save</GameButton>
                        <GameButton onClick={() => route('/load')} onHover={() => handleHover('load')} onLeave={()=>resetHover()}>Load</GameButton>
                        <GameButton onClick={() => route('/dungeon')} onHover={() => handleHover('dungeon')} onLeave={()=>resetHover()}>Embark</GameButton>
                        <GameButton onClick={() => route('/options')} onHover={() => handleHover('options')} onLeave={()=>resetHover()}>Options</GameButton>
                        <GameButton onClick={handleQuit} onHover={() => handleHover('quit')} onLeave={()=>resetHover()}>Quit</GameButton>
                    </div>
                </div>
                <Sprite
                    src="src/assets/images/sprites.png"
                    frameWidth={15}
                    frameHeight={15}
                    frameX={4}
                    frameY={0}
                    className='player-sprite'
                    offset={1}
                    style={{
                        display: 'float',
                        position: 'absolute',
                        left: spritePos.x * 16,
                        top: spritePos.y * 16 +5 ,
                        transition: 'left 0.3s ease, top 0.3s ease',
                    }}
                />
            </div>
        </div>
    )
}

export default TownMenu;