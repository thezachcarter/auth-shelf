import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteItemSaga(action){
  yield takeLatest('DELETE_ITEM', itemDelete)
}

// worker Saga: will be fired on "FETCH_USER" actions
// confirm what the type should be called?
function* itemDelete(action) {
  try {
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put({ type: 'GET_ITEM'})
    } catch {
        console.log(err);
    }
}


export default deleteItemSaga;