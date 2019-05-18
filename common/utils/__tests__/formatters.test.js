import { formatUserData } from '../formatters';

const simpleMilitaryUser = {
  branchOfService: 'Army',
  companyName: '',
  companyRole: '',
  disciplines: [],
  doesWantMentor: false,
  doesWantScholarshipInfo: false,
  doesWantToVolunteer: false,
  employmentStatus: 'fulltime',
  militaryStatus: 'veteran',
  payGrade: 'E-5',
  programmingLanguages: 'JavaScript, Python',
  yearsOfService: 3,
};

describe('formatters', () => {
  describe('formatUserData', () => {
    it('should return no key that has empty string value', () => {
      const parsedData = formatUserData(simpleMilitaryUser);
      Object.values(parsedData).forEach(value => {
        expect(value).not.toStrictEqual('');
      });
    });

    it('should not define interests values when being passed relevant empty arrays', () => {
      const user = {
        ...simpleMilitaryUser,
        disciplines: [],
        programmingLanguages: [],
      };

      const parsedData = formatUserData(user);
      const { interests } = Object.values(parsedData);

      expect(interests).toStrictEqual(undefined);
    });

    it('should define interests value when being passed just one relevant, filled array', () => {
      const programmingLanguages = ['JavaScript', 'Python', 'C++'];
      const user = {
        ...simpleMilitaryUser,
        disciplines: [],
        programmingLanguages,
      };

      const { interests } = formatUserData(user);

      expect(interests).toStrictEqual(programmingLanguages.join(', '));
    });

    it('should not define interests value when being passed array with one empty string', () => {
      const arrayWithEmptyString = [''];

      // one array with empty string
      const user1 = {
        ...simpleMilitaryUser,
        programmingLanguages: arrayWithEmptyString,
        disciplines: [],
      };

      const { interests: interests1 } = formatUserData(user1);

      expect(interests1).toStrictEqual(undefined);

      // both array with empty string
      const user2 = {
        ...simpleMilitaryUser,
        programmingLanguages: arrayWithEmptyString,
        disciplines: arrayWithEmptyString,
      };

      const { interests: interests2 } = formatUserData(user2);

      expect(interests2).toStrictEqual(undefined);
    });
  });
});
