import { ResourceSearchForm } from '../ResourceSearchForm';

export default {
  component: ResourceSearchForm,
  title: 'Forms/ResourceSearchForm',
};

const Template = arguments_ => {
  return (
    <>
      <span>Resource search form</span>
      <ResourceSearchForm {...arguments_} />
    </>
  );
};

// Default Input supplied with only required args
export const Default = Template.bind({});
Default.args = {
  setIsLoading: () => {},
  updateQuery: () => {},
  setErrorMessage: () => {},
  allLanguages: [
    { value: 'books', label: 'Books' },
    { value: 'code challenges', label: 'Code Challenges' },
    { value: 'getting started', label: 'Getting Started' },
    { value: 'tutorials', label: 'Tutorials' },
    { value: 'online courses', label: 'Online Courses' },
    { value: 'jobs', label: 'Jobs' },
  ],
  allCategories: [
    { value: 'python', label: 'Python' },
    { value: 'unix/linux/*nix', label: 'Unix/Linux/*nix' },
    { value: 'bash', label: 'Bash' },
    { value: 'c', label: 'C' },
    { value: 'sysadmin', label: 'Sysadmin' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'html', label: 'HTML' },
    { value: 'php', label: 'PHP' },
  ],
  fields: {
    languages: '',
    category: '',
    paid: '',
    q: '',
  },
};
