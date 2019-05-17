/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */

 /**
  * 1.思想：

     1）将子串分为单核和双核的情况，单核即指子串长度为奇数，双核则为偶数；

    2）遍历每个除最后一个位置的字符index(字符位置)，单核：初始low = 初始high = index，low和high均不超过原字符串的下限和上限；判断low和high处的字符是否相等，相等则low++、high++（双核：初始high = 初始low+1 = index + 1）；

    3）每次low与high处的字符相等时，都将当前最长的回文子串长度与high-low+1比较。后者大时，将最长的回文子串改为low与high之间的；

    4）重复执行2）、3），直至high-low+1 等于原字符串长度或者遍历到最后一个字符，取当前截取到的回文子串，该子串即为最长的回文子串。
  */


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) {
    return s;
  }
  var maxLen = 0;
  var str = '';

  for (var i = 0; i < s.length; i++) {
    findLonges(s, i, i);

    findLonges(s, i, i + 1);
  }

  function findLonges(s1, low, high) {
    while (low >= 0 && high <= s1.length - 1) {
      if (s1.charAt(low) === s1.charAt(high)) {
        if (high - low + 1 > maxLen) {
          maxLen = high - low + 1;
          str = s.substring(low, high + 1);
        }
        low--;
        high++;
      } else {
        break;
      }
    }
  }
  console.log(str);
};
longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth');