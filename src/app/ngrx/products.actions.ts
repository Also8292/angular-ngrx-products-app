import { Action } from "@ngrx/store";
import { type } from "os";

export enum ProductsActionsTypes {
    GET_ALL_PRODUCTS = "[Products] Get All Products",
    GET_ALL_PRODUCTS_SUCCESS = "[Products] Get All Products Success",
    GET_ALL_PRODUCTS_ERROR = "[Products] Get All Products Error",
}

export class GetAllProductsAction implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload: any){}
}

export class GetAllProductsActionSuccess implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: any){}
}

export class GetAllProductsActionError implements Action {
    type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: string){}
}

export type ProductsActions = GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError;
