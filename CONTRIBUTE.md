# Contribute

## Package
The documentation and examples are stored directly in the code as TSDoc and will be extracted in the website build process.

Run the follwing commands to run the test suite.
- `cd package` => go into the package folder
- `npm run test-dev` => to run the test suite in watch mode
- `npm run test` => to run the tests once with code coverage

To check the test coverage report open `/package/coverage/index.html` in the browser.

## Website
Run the following commands to start the website dev server.

- `npm run build:docs-data` => This creates the a json file for the website.
- `cd website` => Go into the website directory
- `npm run dev` => Start the dev server

The website can be rendered for production with `npm run build:docs` from the project root.

## VSCode Settings
Some folders are hidden by default you can make them visible by editing `.vscode/settings.json`.  
This repo comes with recommended extensions you can install to improve your dev experience for this project.