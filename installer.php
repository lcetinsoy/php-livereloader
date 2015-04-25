<?php

echo "Please enter the path to your public folder\n";

$handle = fopen ("php://stdin","r");
$dest= trim(fgets($handle));


if (!is_dir($dest)){
   echo "Invalid path: the path you entered is not a directory";
   exit;
}
echo 'Copying files\n';

copy(__DIR__ . '/server-livereload.js', $dest . '/server-livereload.js');
copy(__DIR__ .'/server-livereload.php', $dest . '/server-livereload.php');

echo 'Done.\n';

echo 'Add jsquery and server-liverealod.js file to your entry point\n';