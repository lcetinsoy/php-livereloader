<?php

$watchFolders = $_POST['foldersToWatch'];
$extensions = $_POST['extensions'];

$extensions = implode('|', $extensions);

$dir = array();

foreach ($watchFolders as $folder) {

    $dirIter = new RecursiveDirectoryIterator($folder);
    $dirIter->setFlags(FilesystemIterator::SKIP_DOTS);

    $recursiveIter = new RecursiveIteratorIterator($dirIter);

    $regexpIter = new RegexIterator($recursiveIter, '/^.*\.(' . $extensions . ')$/');

    foreach ($regexpIter as $path) {
        $dir[] = $path->getPathName();
    }
}


$files = [];
foreach ($dir as $path) {

    $files[] = filemtime($path);
}

$last = max($files);

header('Content-Type: application/json');
echo json_encode(array(
    'last' => $last
));

