function nextNumber(currentSequence) {
    var currentSequence = currentSequence.sort();
    var sequenceNumber = [currentSequence[0]];
    for (var i = 1; i <= currentSequence.length; i++) {
        if (currentSequence[i] - currentSequence[i - 1] === 1) {
            sequenceNumber.push(currentSequence[i]);
        }
        else {
            var count = currentSequence[i] - currentSequence[i - 1];
            for (var j = 1; j <= count; j++) {
                sequenceNumber.push(currentSequence[i - 1] + j);
            }
        }
    }
    console.log(sequenceNumber);
}
nextNumber([1, 2, 6]);
