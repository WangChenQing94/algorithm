// var lengthOfLongestSubstring = function (s) {
//   var str = '';
//   var maxStr = '';
//   for (var i = 0; i < s.length; i++) {
//     var lastIndex = str.indexOf(s[i]);
//     if (lastIndex > -1) str = str.substring(lastIndex + 1);
//     str += s[i];
//     if (maxStr.length < str.length) maxStr = str;
//   }
//   return maxStr.length;
// }
// console.log(lengthOfLongestSubstring('pwwkew'));

var lengthOfLongestSubstring = function (s) {
  var str = '';
  for (var i = 0; i < s.length; i++) {
    var lastIndex = str.indexOf(s[i])
    if (lastIndex > -1) {
      str = str.substring(lastIndex + 1);
    }
    str += s[i];
  }
  return str.length;
}

console.log(lengthOfLongestSubstring('abcabcbb'))