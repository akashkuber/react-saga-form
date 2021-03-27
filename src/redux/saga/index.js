/* eslint-disable no-constant-condition */

import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import { api } from "../services";

export function* getAllProducts() {
  const products = yield call(api.getProducts);
  yield put(actions.receiveProducts(products));
}

export default function* root() {
  yield call(getAllProducts);
}
