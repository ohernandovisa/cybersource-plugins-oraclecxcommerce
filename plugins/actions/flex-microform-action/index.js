import {endpointSaga, takeEvery} from '@oracle-cx-commerce/store/utils';

function* flexMicroformActionSaga(action) {
  const response = yield endpointSaga({action, payload: action.payload, endpointId: 'flexMicroformEndpoint'});
  return response;
}

/**
 * The flexMicroformAction action.
 *
 * This exports a generator function named "saga", whose presence signals OSF to pass
 * the generator function to Redux-Saga's middleware. Run API the first time the action
 * is dispatched via the store API.
 *
 * The generator function results in an asynchronous endpoint invocation
 * when the action is dispatched.
 */
export default {
  *saga() {
    yield takeEvery('flexMicroformAction', flexMicroformActionSaga);
  }
};
