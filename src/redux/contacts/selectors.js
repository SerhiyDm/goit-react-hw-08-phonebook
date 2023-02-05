import { createSelector } from '@reduxjs/toolkit';
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilterValue = state => state.filter.value;
export const selectContactsData = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectRenderdata = createSelector(
  [selectContactsData, selectFilterValue],
  (contacts, filterValue) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    )
);
