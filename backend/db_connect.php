<?php

global $connect;
$connect = mysqli_connect('localhost', 'root', '', 'sequences_classifier');

if (!$connect) {
    setStatus('500', 'Connection error: '.mysqli_connect_error());
    exit;
}