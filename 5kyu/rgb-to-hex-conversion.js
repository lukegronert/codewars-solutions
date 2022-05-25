// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
    const conversionObj = {
      '0':'0',
      '1':'1',
      '2':'2',
      '3':'3',
      '4':'4',
      '5':'5',
      '6':'6',
      '7':'7',
      '8':'8',
      '9':'9',
      '10':'A',
      '11':'B',
      '12':'C',
      '13':'D',
      '14':'E',
      '15':'F'
    }
    let answerArr = [];
    const changeToHex = (letter) => {
      if(letter <= 0) {
        answerArr.push('00')
      } else if (letter >= 255) {
        answerArr.push('FF')
      } else {
        let hexCode = [];
        let valueStr = (letter/16).toString();
        let valueArr = valueStr.split('.');
        hexCode.push(conversionObj[valueArr[0]])
        if(!valueArr[1]) {
          hexCode.push('0');
        } else {
          const secondCode = '.' + valueArr[1];
          hexCode.push(conversionObj[secondCode*16]);
        }
        answerArr.push(hexCode.join(''));
      }
    }
    changeToHex(r);
    changeToHex(g);
    changeToHex(b);
    return answerArr.join('');
}