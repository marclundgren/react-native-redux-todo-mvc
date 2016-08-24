const inputVal = (state = '', action) => {
  console.log({action})
  switch (action.type) {
    case 'SET_INPUT_VALUE':
    // debugger
      return action.val;
    default:
      // debugger
      return state;
  }
};

export default inputVal;
