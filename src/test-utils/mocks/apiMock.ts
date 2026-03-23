import MockAdapter from 'axios-mock-adapter';
import { OperationCodeAPI } from '@/common/utils/api-utils';

const OperationCodeAPIMock = new MockAdapter(OperationCodeAPI);

export default OperationCodeAPIMock;
