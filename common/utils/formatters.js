import { isFilledArray } from '@/common/utils/array-utils';

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
export const formatUserData = ({ programmingLanguages, disciplines, ...data }) => {
  return {
    ...data,
    programmingLanguages: isFilledArray(programmingLanguages)
      ? programmingLanguages.join(', ')
      : '',
    disciplines: isFilledArray(disciplines) ? disciplines.join(', ') : '',
  };
};
