import produce from 'immer';
import { parseISO } from 'date-fns';

const INITIAL_STATE = {
  subscriptions: [],
};

export default function subs(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@subs/LIST_SUCCESS': {
        draft.subscriptions = action.payload.subscriptions;
        break;
      }
      case '@subs/CANCEL_SUB_SUCCESS': {
        const idx = draft.subscriptions.findIndex(
          s => s.Subscriptions[0].id === action.payload.id
        );

        draft.subscriptions.splice(idx, 1);
        break;
      }
      case '@subs/NEW_SUB_SUCCESS': {
        draft.subscriptions.push(action.payload.subscription);
        draft.subscriptions = draft.subscriptions.sort(
          (a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime()
        );
        break;
      }
      default:
    }
  });
}
