import type { EntityState } from '@reduxjs/toolkit';

type ExampleInitialState = {
  exampleState: EntityState<any>;
};

type SetSomeDateAction = {
  books: string[];
};

export type { SetSomeDateAction, ExampleInitialState };
