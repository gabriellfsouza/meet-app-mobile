import { all, takeLatest, put, call } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import { Alert } from 'react-redux';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', {
      ...profile,
    });

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso.');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.error
        ? ['Erro', error.response.data.error]
        : ['Erro ao atualizar perfil', 'Confira seus dados!'];

    Alert.alert(...errorMessage);
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
