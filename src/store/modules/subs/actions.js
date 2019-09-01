export function listSubsRequest() {
  return {
    type: '@subs/LIST_REQUEST',
  };
}

export function listSubsSuccess(subscriptions) {
  return {
    type: '@subs/LIST_SUCCESS',
    payload: { subscriptions },
  };
}

export function cancelSubRequest(id) {
  return {
    type: '@subs/CANCEL_SUB_REQUEST',
    payload: { id },
  };
}

export function cancelSubSuccess(id) {
  return {
    type: '@subs/CANCEL_SUB_SUCCESS',
    payload: { id },
  };
}

export function subscriptionRequest(meetup_id) {
  return {
    type: '@subs/NEW_SUB_REQUEST',
    payload: { meetup_id },
  };
}

export function subscriptionSuccess(subscription) {
  return {
    type: '@subs/NEW_SUB_SUCCESS',
    payload: { subscription },
  };
}
