# server-livereload
A server side auto refresher for browser.

Installation

git clone https://github.com/lce-fr/server-livereload

move to your public folder livereload.js and livereload.php

add the following lines to at the start of your php entry point file :
```php

echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>';  
echo '<script src="/reloadr.js"></script>';

```

go to the bottom of livereload.js file and edit folders and extensions you want to watch.

Provided configuration works with symfony2.
