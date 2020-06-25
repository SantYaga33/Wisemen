import React from 'react';
import {Route} from 'react-router-dom';
import Root from '../root/Root';
import Profile from '../profile/Profile';
import Game from "../game/Game";
import Create from "../create_cards/Create";
import Find from "../find_deck/Find";
import Home from "../home/Home";


export const ROOT_PATH = '/';
export const PROFILE_PATH = '/profile';
export const GAME_PATH = '/game';
export const CREATE_CARDS_PATH = '/cards';
export const FIND_DECK_PATH = '/decks';
export const HOME_PATH = '/home';

const MainRoutes = () => {

    return (
        <>
            <Route exact path={ROOT_PATH}  render={() => <Root/>} />
            <Route exact path={PROFILE_PATH} render={() => <Profile />} />
            <Route exact path={GAME_PATH} render={() => <Game />} />
            <Route exact path={CREATE_CARDS_PATH} render={() => <Create />} />
            <Route exact path={FIND_DECK_PATH} render={() => <Find />} />
            <Route exact path={HOME_PATH} render={() => <Home />} />
        </>
    )
}
export default MainRoutes;