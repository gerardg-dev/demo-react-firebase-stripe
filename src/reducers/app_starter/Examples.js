import { EXAMPLES_PAGINATION } from 'constants/app_starter/ActionTypes';

const initialSettings = {};

const examples = (state = initialSettings, action) => {
  switch (action.type) {
    case EXAMPLES_PAGINATION:
      return {
        ...state,
        paginationDocuments: action.payload
        // someOtherProp: {}
      };
    default:
      return state;
  }
};

export default examples;
