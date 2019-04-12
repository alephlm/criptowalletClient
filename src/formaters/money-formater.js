import numeral from 'numeral';
  
  export class MoneyFormatValueConverter {
    toView(value) {
      return numeral(value).format('($0,0.00)');
    }
  }
