import {
   PENDING_EMPTY,
  PENDING_ADD_ITEM,
  PENDING_REMOVE_ITEM,
  PENDING_SAVE_PAYMENT_METHOD,
  PENDING_SAVE_SHIPPING_ADDRESS,
  
} from '../constants/pendingConstants';
export const pendingReducer = (state = { pendingItems: [] }, action) => {
  switch (action.type) {
    case PENDING_ADD_ITEM:
      const item = action.payload;
      const existItem = state.pendingItems.find((x) => x.doctor === item.doctor);
      if (existItem) {
        return {
          ...state,
          pendingItems: state.pendingItems.map((x) =>
            x.doctor === existItem.doctor ? item : x
          ),
        };
      } else {
        return { ...state, pendingItems: [...state.pendingItems, item] };
      }
      case PENDING_REMOVE_ITEM:
        return {
          ...state,
          pendingItems: state.pendingItems.filter((x) => x.doctor !== action.payload),
        };
        case PENDING_SAVE_SHIPPING_ADDRESS:
          return { ...state, schedualAppoint: action.payload };
          case PENDING_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
            case PENDING_EMPTY:
      return { ...state, pendingItems: [] };
    default:
      return state;
  }
};