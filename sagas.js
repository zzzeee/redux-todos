import { takeEvery, takeLatest, put, take, fork, cancel, call } from 'redux-saga/effects';
import { addDepartment } from './actions';

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga: 将异步执行 increment 任务
export function* incrementAsync(params) {
    yield call(delay, 1000) // yield delay(1000)
    const action = yield call(addDepartment, params.name, params.showName)
    yield put(action)
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
    // yield takeEvery('INCREMENT_ASYNC', incrementAsync)
    // yield takeLatest('INCREMENT_ASYNC', incrementAsync)
    yield _takeLatest('INCREMENT_ASYNC', incrementAsync)
}

export function* _takeEvery(pattern, saga, ...args) {
  while(true) {
    const action = yield take(pattern)
    yield fork(saga, ...args.concat(action))
  }
}

function* _takeLatest(pattern, saga, ...args) {
  let lastTask
  while(true) {
    const action = yield take(pattern)
    if(lastTask) {
        yield cancel(lastTask) // 如果任务已经终止，取消就是空操作
    }

    lastTask = yield fork(saga, ...args.concat(action))
  }
}