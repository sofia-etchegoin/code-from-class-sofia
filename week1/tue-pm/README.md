# Working with packages

## package.json
Is the configuration file which contains data about your node project, such as the packages it needs, project scripts and many other things.

You can create a new package.json file with `npm init`. `npm init -y` will auto answer yes to all the defaults.

Add `"type": "module",` to the package.json file to enable your files to be loaded as ES Modules.

## adding a package
`npm install package-name` will download a package and all its dependencies in your node_modules folder - you can now import it into your code with `import ____ from "package-name"`.

## gitignore
`.gitignore` is a text file which tells git not to track certain files - when you first setup a project you always want .gitignore to include node_modules `echo node_modules >> .gitignore` is a quick way to add it. Other handy things to ignore are `.DS_Store` and `tag.

## project scripts

are a way to save terminal commands in your package.json so you can easily call them later. They are executed with `npm run script-name`. `run` is optional for the `start` and `test` scripts.

