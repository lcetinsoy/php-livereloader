# server-livereload
A server side auto refresher for browser.

Warning: For developement only. To be removed from production.

Installation

1. Download 

git clone https://github.com/lce-fr/server-livereload

2. Moving file to the public folder

php installer.php

3.

Add the following lines to at the start of your php entry point file:

```php

echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>';  
echo '<script src="/server-livereload.js"></script>';

```
4. Edit watching configs in livereload.js

Default configuration works for symfony2.

Available options:

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
