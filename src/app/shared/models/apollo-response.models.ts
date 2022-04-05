import { NetworkStatus } from '@apollo/client/core/networkStatus';
import { ApolloError } from '@apollo/client/errors';

export interface ApolloResponse {
  data: any;
  loading: boolean;
  error?: ApolloError;
  networkStatus: NetworkStatus;
}
