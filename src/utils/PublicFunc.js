const showPrice = rating => {
  let price = 0;
  if (rating <= 3) {
    price = 3500;
  } else if (rating > 3 && rating <= 6) {
    price = 8250;
  } else if (rating > 6 && rating <= 8) {
    price = 16350;
  } else {
    price = 21250;
  }
  return price;
}

const convertToRupiah = angka => {
  let rupiah = '';
  const angkarev = angka.toString().split('').reverse().join('');
  for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
  return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
}

const myFilm = rating => {
  if (rating >= 7.3 && rating <= 7.5) {
    return true;
  } else {
    return false;
  }
}

export {
  showPrice,
  convertToRupiah,
  myFilm,
}