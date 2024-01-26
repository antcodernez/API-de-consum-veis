function decimalToOctal(numberToConvert, resultOct = "") 
    {
        if(numberToConvert <= 1)
            {
                return "1" + resultOct;
            }
        else
            {
                let numberDiv = Math.trunc(numberToConvert / 8);
                let numberMod = numberToConvert % 8;
                resultOct += numberMod;
                return decimalToOctal(numberDiv,  resultOct);
            }
    }

module.exports = {decimalToOctal}