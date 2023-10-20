const axios = require('axios');
const { PDF2JSON } = require('pdf2json');

const pdfUrl = 'https://www.mercadopago.com.br/money-out/transfer/api/receipt/pix_pdf/65409678073/pix_account/pix_payment.pdf'; // Insira o URL para o arquivo PDF aqui

 axios.get(pdfUrl, {
    headers,
    responseType: 'arraybuffer'
})
  .then(response => {
    const pdfParser = new PDF2JSON();

    pdfParser.on('pdfParser_dataReady', pdfData => {
      const { formImage } = pdfData.data.Pages[0];
      const html = `<html><body>${formImage.map(item => item.R.map(row => row.T).join('')).join('<br>')}</body></html>`;
      console.log(html); // Aqui está o HTML resultante
    });

    pdfParser.loadPDF(response.data);
  })
  .catch(error => {
    console.error('Erro ao baixar o PDF', error);
  });
