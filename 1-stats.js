/**
 *  Reads in a sequence of real numbers from standard input and
 *  computes their mean and standard deviation.
 */

var Stats = function () {
	var length = arguments.length;
	if (length > 0) {
		var sum = 0,
			mean = 0,
			stdDeviation = 0;

		for (var i = 0; i < length; i++) {
			sum += Number(arguments[i]);
		}

		mean = sum / length;
		sum = 0;

		for (var j = 0; j < length; j++) {
			sum += (Number(arguments[j]) - mean) * (Number(arguments[j]) - mean);
		}
		stdDeviation = Math.sqrt(sum / (length - 1));

		console.log('Mean: ' + mean + '\nStandard Deviation: ' + stdDeviation);
	}
}