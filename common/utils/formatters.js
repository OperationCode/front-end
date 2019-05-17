import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { coerceEmptyStringToUndefined } from 'common/utils/string-utils';

// TODO: Remove eslint disable when more items are exported
/* eslint-disable import/prefer-default-export */

/**
 * An object representing the application's visual breakpoints.
 * @typedef {{
 * branchOfService: string,
 * companyName: string,
 * companyRole: string,
 * disciplines: string[],
 * doesWantMentor: boolean,
 * doesWantScholarshipInfo: boolean,
 * doesWantToVolunteer: boolean,
 * employmentStatus: string,
 * militaryStatus: string,
 * payGrade: string,
 * programmingLanguages: string[],
 * yearsOfService: number,
 * }} UserData
 *

/**
 * @description Format request body for updating user data
 *
 * @exports
 * @param {UserData}
 * @returns {UserData} non-undefined values from UserData
 */
export const formatUserData = ({
  branchOfService,
  companyName,
  companyRole,
  disciplines,
  doesWantMentor,
  doesWantScholarshipInfo,
  doesWantToVolunteer,
  employmentStatus,
  militaryStatus,
  payGrade,
  programmingLanguages,
  yearsOfService,
}) => {
  let interests;

  const isFilledArray = potentialArray =>
    Array.isArray(potentialArray) &&
    !isEmpty(potentialArray) &&
    get(potentialArray, '[0]', undefined);

  const hasInterests = isFilledArray(disciplines) || isFilledArray(programmingLanguages);

  if (hasInterests) {
    const interestItems = [...programmingLanguages, ...disciplines];

    // interests could be a string of many comma-separated items, or a single string
    interests =
      interestItems.length > 1
        ? interestItems.join(', ')
        : coerceEmptyStringToUndefined(interestItems[0]);
  }

  const user = {
    branch_of_service: coerceEmptyStringToUndefined(branchOfService),
    company_name: coerceEmptyStringToUndefined(companyName),
    company_role: coerceEmptyStringToUndefined(companyRole),
    mentor: doesWantMentor,
    scholarship_info: doesWantScholarshipInfo,
    volunteer: doesWantToVolunteer,
    employment_status: coerceEmptyStringToUndefined(employmentStatus),
    military_status:
      militaryStatus === 'civilian' ? undefined : coerceEmptyStringToUndefined(militaryStatus),
    pay_grade: coerceEmptyStringToUndefined(payGrade),
    interests,
    years_of_service: coerceEmptyStringToUndefined(yearsOfService),
  };

  return user;
};
