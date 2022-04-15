import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* deleteItemSaga(action){
  console.log( 'THIS IS THE YIELD', action);
  yield takeLatest('DELETE_ITEM', itemDelete)
}

// worker Saga: will be fired on "FETCH_USER" actions
// confirm what the type should be called?
function* itemDelete(action) {
  console.log( `LOG FROM SAGA ${action.payload}`);
  try {
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put({ type: 'GET_ITEM'})
    } catch(err) {
        console.log(err);
    }
}


export default deleteItemSaga;