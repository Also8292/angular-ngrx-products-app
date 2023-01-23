import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { ProductService } from "../services/product.service";
import { GetAllProductsActionError, GetAllProductsActionSuccess, ProductsActionsTypes } from "./products.actions";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class ProductsEffects {

    constructor(private productService: ProductService, private effectActions: Actions) {}

    getAllProductsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
            mergeMap((action) => {
                return this.productService.getProducts()
                .pipe(
                    map((products) => new GetAllProductsActionSuccess(products)),
                    catchError(error => of(new GetAllProductsActionError(error)))
                )
            })
        )   
    );

}