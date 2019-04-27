import faker from 'faker';
import { minPasswordCharNum } from '../common/constants/validations';

export default function mockValidPassword() {
  return `${faker.internet.password(minPasswordCharNum)}!1Aa`;
}
