import { get, post, patch, put, ResourcesAPI } from 'common/utils/api-utils';
import { formatUserData } from 'common/utils/formatters';

/* GET REQUESTS */
export const getCodeSchoolsPromise = () => get('api/v1/codeschools/');
export const getTeamMembersPromise = () => get('api/v1/teamMembers/');
export const getResourcesPromise = parameters =>
  get('api/v1/resources/', { parameters }, ResourcesAPI);
export const getResourcesBySearch = parameters =>
  get('api/v1/search/', { parameters }, ResourcesAPI);
export const getResourceCategories = () => {
  return get('api/v1/categories', {}, ResourcesAPI);
};
export const getResourceLanguages = () => {
  return get('api/v1/languages', {}, ResourcesAPI);
};

/* POST REQUESTS */
export const createResource = ({ category, languages, name, notes, free, url }) =>
  post('api/v1/resources/', [{ category, languages, name, notes, free, url }], {}, ResourcesAPI);

/* PATCH REQUESTS */

/* PUT REQUESTS */
export const updateResourceVoteCount = ({ id, voteDirection }) =>
  put(`api/v1/resources/${id}/${voteDirection}`, {}, ResourcesAPI);
