<?php
$path = realpath('../../../');
foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path)) as $filename)
{
        echo "$filename <br/>";
}



