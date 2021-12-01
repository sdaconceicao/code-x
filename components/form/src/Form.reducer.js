export const actions = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
}
export default (elements, action) => {
  switch(action.type){
    case actions.ADD:
      if(Array.isArray(action.value)){
        action.value.map(element=>{
          if(element.props.name) elements.push(element);
        })
      } else {
        elements.push(action.value);
      }
      return elements
    case action.REMOVE:
      return elements
    default:
      return elements
  }
}
