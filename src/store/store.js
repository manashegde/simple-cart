// import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { createStore, combineReducers,applyMiddleware  } from "redux";
import createSagaMiddleware from 'redux-saga'
import { authReducer } from "../reducers/auth";
import { cartReducer } from "../reducers/cart";
import { productsReducer } from "../reducers/products";
import { watcherSaga } from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()
const reducer=combineReducers({
    products:productsReducer,
    cart:cartReducer,
    auth:authReducer
})
const store=createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watcherSaga)
export default store