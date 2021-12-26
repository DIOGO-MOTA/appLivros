import { DataListBookProps } from '../Dashboard';

export type BookDetailsProps = {
  books: DataListBookProps ;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      dashboard: undefined;
      bookDetails: BookDetailsProps;
      category: undefined;
    }
  }
}