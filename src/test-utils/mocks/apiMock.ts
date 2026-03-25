import MockAdapter from 'axios-mock-adapter';
import { OperationCodeAPI } from '@/lib/utils/api-utils';

const OperationCodeAPIMock = new MockAdapter(OperationCodeAPI);

export default OperationCodeAPIMock;
