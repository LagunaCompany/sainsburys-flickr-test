# sainsburys-flickr-test

Creates a gallery of images from Flickr's public API, and saves loads/favourites.

## Requisites

This code was created in a build process using:

- [Ruby](http://rubyinstaller.org/)
- [Sass gem for Ruby](http://sass-lang.com/install)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/)
- [Yeoman and its dependencies](http://yeoman.io/)
- [generator-webapp for Yeoman](https://github.com/yeoman/generator-webapp)

## Dev Environment Set-Up

Use Yeoman to scaffold a project using generator-webapp, including Bootstrap and Sass.

Use Bower to install [Handlebars](https://github.com/wycats/handlebars.js/).

Copy the contents of the app folder from this repo into the app folder created by generator-webapp.

## Developing and Building

Switch to the webapp's parent folder.

- grunt serve - runs a test web server which listens to changes in the app folder and provides JavaScript linting, Sass compilation and live reload.
- grunt dist - builds the project into a "dist" folder. I have included a dist folder in this repo for convenience.

## Additional Notes

Time permitting, I would have included the entire set of project files for convenience, but I hope this clearly explains my method! Feel free to let me know if you have any questions.
