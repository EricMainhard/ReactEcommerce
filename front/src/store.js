import { data } from "../../back/data";
import { createStore } from 'redux';

const initialState = {};
const reducer = (state,action) => {
    return {products: data.products}
}

const store = createStore(reducer,initialState);

export default store;