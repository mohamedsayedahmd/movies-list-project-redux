


### Middleware and update the store
```
npm i redux-thunk
```

## update the store with :
```
import {createStore ,applyMiddleware} from 'redux';
```
### And send applyMiddleware as a parameter
```
import {createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
export const store = createStore(rootReducer,applyMiddleware(thunk));
```

### reducer save the update 