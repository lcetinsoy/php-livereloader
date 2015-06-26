# server-livereload
A server side auto refresher for browser.

Warning: For developement only. To be removed from production.

Installation
------------

composer require lce-fr/php-livereloader 


php -f vendor/lce-fr/php-livereload/installer.php

Usage
-----


Add the following lines to at the start of your php entry point file:

```php

echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>';  
echo '<script src="/server-livereload.js"></script>';

```

Edit watching configs in livereload.js

### Symfony usage ###

paste the following line in app_dev.php after the response variable set up 


```php

if (!$request->isXmlHttpRequest() &&
    !in_array('application/json', $request->getAcceptableContentTypes()) &&
    !in_array('application/xml', $request->getAcceptableContentTypes())    
    ){

    echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>';  
    echo '<script src="/server-livereload.js"></script>';
}



```

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
