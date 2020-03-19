module.exports = function check(str, bracketsConfig) {
    let outputArray = [str[0]];
    let checker = true;
    for (let i = 1; i < str.length; i++) {
        if (checker == false) break;
        else {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (str[i] == bracketsConfig[j][0]) {
                    if (
                        bracketsConfig[j][0] == bracketsConfig[j][1] &&
                        outputArray[outputArray.length - 1] ==
                            bracketsConfig[j][0]
                    )
                        outputArray.pop();
                    else outputArray.push(str[i]);
                    checker = true;
                    break;
                } else if (str[i] == bracketsConfig[j][1]) {
                    if (
                        outputArray[outputArray.length - 1] ==
                        bracketsConfig[j][0]
                    ) {
                        outputArray.pop();
                        checker = true;
                        break;
                    } else {
                        checker = false;
                        break;
                    }
                } else {
                    checker = false;
                }
            }
        }
    }
    if (checker && !outputArray.length) return true;
    else return false;
    // your solution
};
