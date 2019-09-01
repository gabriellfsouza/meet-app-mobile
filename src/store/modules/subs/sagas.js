import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import {
  cancelSubSuccess,
  listSubsSuccess,
  subscriptionSuccess,
} from './actions';

export function* listSubscriptions() {
  try {
    const response = yield call(api.get, 'subscriptions');
    yield put(listSubsSuccess(response.data));
  } catch (error) {
    const message =
      (error &&
        error.response &&
        error.response.data &&
        error.response.data.error) ||
      'Verifique com o administrador.';
    Alert.alert('Falha ao listar inscrições', message);
  }
}

export function* cancelSubscription({ payload }) {
  try {
    yield call(api.delete, `subscriptions/${payload.id}`);
    yield put(cancelSubSuccess(payload.id));
    Alert.alert('Sucesso', 'Inscrição removida com sucesso.');
  } catch (error) {
    const message =
      (error &&
        error.response &&
        error.response.data &&
        error.response.data.error) ||
      'Verifique com o administrador.';
    Alert.alert('Falha ao listar inscrições', message);
  }
}

export function* newSubscription({ payload }) {
  try {
    const { meetup_id } = payload;
    const response = yield call(api.post, 'subscriptions', { meetup_id });
    yield put(subscriptionSuccess(response.data));
    Alert.alert('Sucesso', 'Inscrição efetuada com sucesso.');
  } catch (error) {
    const message =
      (error &&
        error.response &&
        error.response.data &&
        error.response.data.error) ||
      'Verifique com o administrador.';
    Alert.alert('Falha ao listar inscrições', message);
  }
}

export default all([
  takeLatest('@subs/LIST_REQUEST', listSubscriptions),
  takeLatest('@subs/CANCEL_SUB_REQUEST', cancelSubscription),
  takeLatest('@subs/NEW_SUB_REQUEST', newSubscription),
]);
