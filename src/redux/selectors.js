import { createSelector } from '@reduxjs/toolkit';

export const selectContactsData = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilterValue = state => state.filter.value;
export const selectRenderdata = createSelector(
  [selectContactsData, selectFilterValue],
  (contacts, filterValue) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    )
);
