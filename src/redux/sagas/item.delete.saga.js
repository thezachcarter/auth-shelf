import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
// confirm what the type should be called?
function* itemDelete(action) {
  try {
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put({ type: 'GET_ITEM'})
    };

}

// What is this called? Confirm with team?
function* userSaga() {
  yield takeLatest('GET_ITEM', getItems);
}

export default userSaga;