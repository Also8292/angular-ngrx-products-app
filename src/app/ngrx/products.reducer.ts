import { Product } from "../model/product.model";
import { ProductsActions, ProductsActionsTypes } from "./products.actions";

export enum ProductsStateEnum {
    INITIAL = "Initial",
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error"
}

export interface ProductsState {
    products: Product[],
    errorMessage: string,
    dataState: ProductsStateEnum
}

const initState: ProductsState = {
    products: [],
    errorMessage: "",
    dataState: ProductsStateEnum.INITIAL
}

export function productsReducer(state: ProductsState = initState, action: ProductsActions) {
    switch (action.type) {
        case ProductsActionsTypes.GET_ALL_PRODUCTS:
            return {...state, dataState: ProductsStateEnum.LOADING}

        case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
            return {...state, dataState: ProductsStateEnum.LOADED, products: action.payload}

        case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
            return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.payload}

        default:
            return {...state}

    }
}
