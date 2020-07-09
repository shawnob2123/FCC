function truncateString(str, num) {

	if(str.length <= num) {
		return str;
	}

	if(str.length > num) {
		return str.slice(0, num) + "...";
	}
}
