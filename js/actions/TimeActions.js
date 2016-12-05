import AppDispatcher from '../dispatcher/AppDispatcher';
import assign from 'object-assign';

let TimeActions = {
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: 'create',
      text: text
    })
  }
}

export default TimeActions;