# Common Components
This is the base UI library with which all Operation Code components are build upon. These components are usually designed to be composable and reusable, whereas the rest of this application's components are single-use or simply for the sake of modularity.

## FAQ

### How should I make a common component?

- `yarn create-component ${ComponentName}`
️
### Why is it named `_common_` ?

- These components will be leveraged most often and most code editors will list folders alphabetically. This naming convention is simply so that they are listed first. At some point in the future, these "common" components may exist in a separate library.

### Why not use something like Bootstrap or MaterialUI to avoid reinventing the wheel?

- Keep in mind this repository has a tertiary purpose of teaching others to code! While it's an important skill to learn how to leverage popular tools like that, we think reinventing the wheel has a place in a developer's life. Writing your own UI library will help you think about scalable abstractions as you gain more experience.
