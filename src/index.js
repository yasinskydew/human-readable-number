module.exports = function toReadable (number) {

    if(!number) return 'zero';

    //set numbers
    const map = new Map();
    map.set('1', 'one');
    map.set('2', 'two');
    map.set('3', 'three');
    map.set('4', 'four');
    map.set('5', 'five');
    map.set('6', 'six');
    map.set('7', 'seven');
    map.set('8', 'eight');
    map.set('9', 'nine');
    map.set('10', 'ten');

    map.set('11', 'eleven');
    map.set('12', 'twelve');
    map.set('13', 'thirteen');
    map.set('14', 'fourteen');
    map.set('15', 'fifteen');
    map.set('16', 'sixteen');
    map.set('17', 'seventeen');
    map.set('18', 'eighteen');
    map.set('19', 'nineteen');

    map.set('20', 'twenty');
    map.set('30', 'thirty');
    map.set('40', 'forty');
    map.set('50', 'fifty');
    map.set('60', 'sixty');
    map.set('70', 'seventy');
    map.set('80', 'eighty');
    map.set('90', 'ninety');

    const numArray = String(number).split('');
    let result = '';

    if(numArray.length > 3) result = 'this number is too large';
    
    if(numArray.length === 1) result = map.get(numArray[0]);

    if(numArray.length >= 2) {
        
        const last = numArray[numArray.length - 1];
        const prevLast = numArray[numArray.length - 2];

        if(prevLast === '0' && last === '0') {
            result = '';
        } else if(prevLast === '1' || last === '0') {
            result = map.get(prevLast + last);
        } else if(prevLast === '0' && last !== '0') {
            result = `${map.get(last)}`
        } else {
            result = `${map.get(prevLast + '0')} ${map.get(last)}`
        }
    }

    if(numArray.length >= 3) {
        result = `${map.get(numArray[0])} hundred ${result}`
    }

    return result.trim();
}
