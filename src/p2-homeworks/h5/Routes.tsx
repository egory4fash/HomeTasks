import React from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
            <Route path={'junior'} exact render={() => <Redirect to={PATH.JUNIOR}/>}/>
            <Route path={'junior-plus'} exact render={() => <Redirect to={PATH.JUNIOR_PLUS}/>}/>
*/}
            <Route exact path={'/'} render={() => <PreJunior/>}/>
            <Route exact path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
            <Route exact path={PATH.JUNIOR} render={() => <Junior/>}/>
            <Route exact path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>


            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route path={'*'} render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
