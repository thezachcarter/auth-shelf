import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* fetchItems() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/shelf', config);

    yield put({ type: 'SET_ITEMS', payload: response.data });
  } catch (error) {
    console.log('Items get request failed', error);
  }
}

function* itemsSaga() {
  yield takeLatest('FETCH_ITEMS', fetchItems);
}

export default itemsSaga;