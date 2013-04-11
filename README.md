# node-jsiohint

A command line interface and npm package for the jsio-flavored variant of [jshint](http://www.jshint.com/), used for [Game Closure](http://www.gameclosure.com/).

## Install

To use jsiohint from any location (for npm v1.x) you need to install using the global (-g) flag.

    npm install -g jsiohint

## Text Editor Plugins

In order to use jsiohint in the place of jshint, overwrite the symlink to jshint with one to jsiohint.

    ln -s $(which jsiohint) /usr/local/bin/jshint

  See the [GameClosure guide to configuring your JavaScript environment](http://docs.gameclosure.com/guide/coding-environment.html) for further details.