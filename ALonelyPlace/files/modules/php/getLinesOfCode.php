<?php
$path = realpath('../../../../');
$linecount = 0;
foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path)) as $filename)
{
    if(is_dir($filename) == false && str_contains($filename, '.git') == false)
    {
        $handle = fopen($filename, "r");
        echo $filename . "<br>";
        while(!feof($handle))
        {
            $line = fgets($handle, 4096);
            $linecount = $linecount + substr_count($line, PHP_EOL);
        }

        fclose($handle);
    }
}
echo $linecount; 
?>



