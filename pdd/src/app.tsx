import './app.css'
import { LocationProvider, Router, Route } from 'preact-iso';
import TownMenu from './scenes/town/townMenu';

export function App() {

  return (
    <>
      <div className="game-container">
        <LocationProvider>
          <Router>
            
            <Route path="/" component={TownMenu} />
            <Route path="/town" component={TownMenu} />
            <Route path="/guild" component={TownMenu} />
            <Route path="/shop" component={TownMenu} />
            <Route path="/home" component={TownMenu} />
            <Route path="/save" component={TownMenu} />
            <Route path="/load" component={TownMenu} />
            <Route path="/dungeon" component={TownMenu} />
            <Route path="/options" component={TownMenu} />
          </Router>
        </LocationProvider>
      </div>
    </>
  )
}
