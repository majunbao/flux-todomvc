import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';


let _todos = ['ni'];

function create(text){
  _todos.push(text);
}

let TimeStore = assign({}, EventEmitter.prototype, {
  getAll: function(){
    return _todos;
  }
})


AppDispatcher.register(function(action){
  switch(action.actionType){
    case 'create':
      let text = action.text;
      console.log(action);
      TimeStore.emit('change');
      break;
    default:
      // no do
  }
});


export default TimeStore;