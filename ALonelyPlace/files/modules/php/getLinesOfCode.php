<?php
$path = realpath('../../../');
foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path)) as $filename)
{
    if(is_dir($filename) == false)
    {
        echo "$filename <br/>";
    }
}



