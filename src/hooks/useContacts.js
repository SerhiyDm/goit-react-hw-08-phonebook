import { useSelector } from 'react-redux';
import {
  selectContactsData,
  selectError,
  selectFilterValue,
  selectIsLoading,
  selectRenderdata,
} from 'redux/contacts/selectors';
export const useContacts = () => {
  return {
    contactsData: useSelector(selectContactsData),
    isLoading: useSelector(selectIsLoading),
    error: useSelector(selectError),
    filterValue: useSelector(selectFilterValue),
    renderData: useSelector(selectRenderdata),
  };
};
