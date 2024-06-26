const channels = ['channel1', 'channel2', 'channel3'];
const result = "Facet encoding dropped as ".concat(channels.join(' and '), " ").concat(channels.length > 1 ? 'are' : 'is', " also specified.");

console.log(result);
// Output: "Facet encoding dropped as channel1 and channel2 and channel3 are also specified."
