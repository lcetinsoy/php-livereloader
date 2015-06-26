# server-livereload
A server side auto refresher for browser.

Warning: For developement only. To be removed from production.

Installation
------------
```bash
composer require lce-fr/php-livereloader 


php -f vendor/lce-fr/php-livereload/installer.php
```

Usage
-----


Add the following lines at the start of your php entry point file:

```php

echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>';  
echo '<script src="/server-livereload.js"></script>';

```

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

### server-livereload.js configuration

Default configuration works for symfony2:


```javascript
{
        serverPath: '/server-livereload.php',
        pollFrequency: 1000,
        filesToWatch:[
            '../app/AppKernel.php',
            '../app/bootstrap.php.cache'          
        ],
        foldersToWatch: [    
          '../web/js/compiled',
          '../web/css/compiled',
          '../src',
          '../vendor',
          '../app/Resources',
          '../app/config',
        ],
        extensions: [
          'php',
          'html.twig',
          'css',
          'yml',
          'xml',
          'js'

        ]

}



```
