interface SpriteProps {
    src: string;
    frameWidth: number;
    frameHeight: number;
    frameX: number;
    frameY: number;
    className?: string;
    offset?: number;
    style?: preact.JSX.CSSProperties;
}

export function Sprite({
    src,
    frameWidth,
    frameHeight,
    frameX,
    frameY,
    style = {},
    className ='',
    offset=0
}:SpriteProps) {

    return (
        <div
            className={className}
            style = {{
                width: `${frameWidth}px`,
                height: `${frameHeight}px`,
                ...style,
            }}
        >
            <div 
                className={`${className}-bg`} 
                style={{
                    width: `${frameWidth}px`, 
                    height: `${frameHeight}px`,
                    zIndex: 5,
                    position:'absolute'
                    }}/>
            <div
                className={`${className}`}
                style = {{
                    width: `${frameWidth}px`,
                    height: `${frameHeight}px`,
                    backgroundImage:`url(${src})`,
                    backgroundPosition:`-${(frameX * frameWidth) + (frameX * offset)}px -${(frameY * frameHeight) + (frameY * offset)}px`,
                    backgroundRepeat:'no-repeat',
                    imageRendering:'pixelated',
                    backgroundSize:'auto',
                    zIndex: 10,
                    position:'absolute'
                }}/>
        </div>
    )
}