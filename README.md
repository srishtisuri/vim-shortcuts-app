# vim-shortcuts-app

This web application was built as one of my very first personal react projects. It was inspired by my adoption of a personalised vim setup for my day-to-day programming work. It is a simple React/Redux application. 

srishtisuri.github.io/vim-shortcuts-app/

## How It Works

vim-shortcuts-app is a simplistic application to capture keyboard shortcuts for personal vim setups.

### Shortcut
The 'Shortcuts' field captures keyboard input from the user to generate a stringified "command". Spaces are added automatically between the keystrokes for readability.

### Description
Each keyboard shortcut is accompanied by a description so that each shortcut can be referenced at a glance.

### Clear
Both the 'Shortcut' and 'Description' input fields have a 'Clear' button. This was initially built for the 'Shortcut' field, given the complexities of keyboard input - there needed to be an effective way to clear/edit the text because backspace would be captured as part of the command. 

It was introduced to both fields for consistency and ease of use in each case. It also exists in the 'Edit' state of the individial shortcuts.

### Edit
Sometimes we update the keybindings in our personal vim setups - it made sense to offer 'Edit' functionality so that commands and descriptions alike could be updated.

### Local Storage
There needed to be a simplistic way to persist the state of the application and preserve the shortcuts that a user would have created. These shortcuts would obviously also be personalised and would need to be specific to each user. For these reasons, local storage was selected as a tactical solution - it was quick and straightforward to implement and satisfied the requirements, allowing the app to be rounded off.

Local storage obviously has some drawbacks - if a user clears their browser cache, their shortcuts will be deleted. There are a number of future enhancements related to application state that will hopefully be implemented one day. Read further for some ideas.

### Search
The app has a basic filtration system that parses both shortcuts and descriptions to return specific items. 

## Future Improvement Ideas

- Add authentication layer so that each user can login to their account to access their personalised shortcuts
- Push shortcuts to database so that shortcuts can be persisted in a more robust manner (correlates to the idea above)
- Build import feature to accept JSON file of keybindings to generate shortcut cards
- Build export feature to export all shortcuts as JSON file of keybindings
- Perform thorough npm audit

## Deployment

vim-shortcuts-app is deployed with the help of a tool called `gh-pages`. Predeploy and deploy scripts are set up in the root package.json which, when invoked (`yarn deploy`), run scripts from the `gh-pages` CLI. The source code is built and pushed to a branch called `gh-pages` in this repository. From there it is deployed to Github Pages.
