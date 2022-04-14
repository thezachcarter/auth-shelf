import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postItemSaga(action) {
    yield takeLatest('POST_ITEM', postNewItem)
}

function* postNewItem(action) {
    try{
        console.log('in post item', action.payload);
        yield axios.post('/api/shelf', action.payload)
        yield put({type: 'GET_ITEM'})
    } catch(err) {
        console.log(err);   
    }
}

export default postItemSaga;