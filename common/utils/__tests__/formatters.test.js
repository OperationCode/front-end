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
    it('should covert disciplines and programmingLanguages to string representations', () => {
      const user = {
        ...simpleMilitaryUser,
        disciplines: ['Front-End Developer'],
        programmingLanguages: ['JavaScript', 'Python', 'C++'],
      };

      const parsedData = formatUserData(user);
      const { disciplines, programmingLanguages } = parsedData;

      expect(disciplines).toStrictEqual('Front-End Developer');
      expect(programmingLanguages).toStrictEqual(['JavaScript', 'Python', 'C++'].join(', '));
    });

    it('should convert empty arrays to empty strings', () => {
      const user = {
        ...simpleMilitaryUser,
        disciplines: [],
        programmingLanguages: ['JavaScript', 'Python', 'C++'],
      };

      const parsedData = formatUserData(user);
      const { disciplines, programmingLanguages } = parsedData;

      expect(disciplines).toStrictEqual('');
      expect(programmingLanguages).toStrictEqual(['JavaScript', 'Python', 'C++'].join(', '));
    });
  });
});
