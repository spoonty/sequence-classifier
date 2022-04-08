<?php

function route($method, $urlData, $formData) {
	global $connect;

	switch ($method) {
		case 'GET':
			if (!sizeof($urlData)) getLastResult($connect);
			else setStatus('404', 'Route does not exist');
			break;
		case 'POST':
			if (!sizeof($urlData)) addResult($connect, $formData);
			else setStatus('404', 'Route does not exist');
			break;
		default:
			setStatus('403', 'Only GET and POST methods avaliable');
	}

	return;
}

function getLastResult($connect) {
	$result = $connect->query("SELECT * FROM sequences WHERE id = 
		(SELECT max(id) FROM sequences)")->fetch_assoc();

	if (!is_null($result)) {
		echo json_encode([
			'input' => $result['input'],
			'output' => $result['output']
		]);
	}
	else {
		setStatus('404', 'Data does not exist');
	}
}

function addResult($connect, $formData) {
	$input = $formData->input;
	$output = $formData->output;

	if (!empty($input) && !empty($output)) {
		$connect->query("INSERT INTO sequences (input, output) VALUES ('$input', '$output')");
		setStatus('200', 'Ok');
	}
	else {
		setStatus('400', 'Input and output can\'t be empty');
	}
}