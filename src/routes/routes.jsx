import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './routesNames';
import { HomePage } from '../pages/HomePage'
import { ListPageContainer } from '../pages/ListsPage/container';
import { CounterPage } from '../pages/CounterPage/container';
import { UsersPageContainer } from '../pages/UsersPage/container';
import { HookCounterContainer } from '../pages/HookPage/container';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={(HomePage)} />
      <Route exact path={ROUTES.COUNTER_PAGE} component={CounterPage} />
      <Route exact path={ROUTES.HOOK_COUNTER} component={HookCounterContainer} />
      <Route exact path={ROUTES.LIST_PAGE} component={ListPageContainer} />
      <Route exact path={ROUTES.USERS_PAGE} component={UsersPageContainer} />
    </Switch>
  )
};