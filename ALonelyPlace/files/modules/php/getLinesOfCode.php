<?php
$path = realpath('../../../');
$linecount = 0;
foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path)) as $filename)
{
    echo $filename . "<br>";
    if(is_dir($filename) == false)
    {
        $handle = fopen($filename, "r");
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



