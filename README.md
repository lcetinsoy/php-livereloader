# server-livereload
A server side auto refresher for browser.

Warning: For developement only. To be removed from production.

Installation

git clone https://github.com/lce-fr/server-livereload

move to your public folder server-livereload.js and server-livereload.php

add the following lines to at the start of your php entry point file :

```php

echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>';  
echo '<script src="/server-livereload.js"></script>';

```

go to the bottom of livereload.js file and edit folders and extensions you want to watch.

Default configuration works for symfony2.

available options:

```javascript

{

  serverPath: 'server-livereaload.php'
  pollFrequency: 1000,
  foldersToWatch: [
    './',
    '../src',
    '../vendor',
    '../app',

  ],
  extensions: [
    'php',
    'html.twig',
    'css',
    'yml',
    'xml'

  ]

}

```
