import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import tokenReducer from "./slices/tokenSlice";

const rootReducers = combineReducers({
    tokenStore: tokenReducer
})

export default configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            logger
        })
})