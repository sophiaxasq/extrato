const express = require('express');
const axios = require('axios');
const app = express();


const headers = {
    'authority': 'www.mercadopago.com.br',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'cookie': '_ga=GA1.1.13381505.1691940344; _d2id=f87a8a16-4a3b-43e2-ba02-4d1662cccd36; ftid=tvY6KvNuRWQvB3r5mJtKJgO3XFB9uya2-1691940779242; orguserid=90H0tdhdhdT4d; ssid=ghy-081311-uUkYuNJecLpQRqKExeTPsWxwwsPSTy-__-1367070490-__-1786635259584--RRR_0-RRR_0; orguseridp=1367070490; orgnickp=SILVAROSELI20230504151337; dxDevPanelOnboarding=true; _mp_ga=GA1.3.573620295.1691940781; _gcl_au=1.1.1317245937.1692110709; _fbp=fb.2.1692110709182.1127717833; dsid=754e019f-550c-4059-abb3-e7e336781214-1692110710979; _hjSessionUser_492923=eyJpZCI6Ijc0NmM1ZjFkLTZiZWYtNTdjMy04MTA5LWI3OWFmN2E1ZDM3MCIsImNyZWF0ZWQiOjE2OTIxMTA3MDkyMzgsImV4aXN0aW5nIjp0cnVlfQ==; _hjSessionUser_585655=eyJpZCI6IjAzY2Y2YTI4LTZhN2QtNWZlZC04ZjVlLTJiZjAwN2JhOGQ1YSIsImNyZWF0ZWQiOjE2OTIxMTA3NDU3NDMsImV4aXN0aW5nIjp0cnVlfQ==; p_dsid=74d878d8-3555-4a8d-b72b-9b92f57c87ac-1693928082802; QSI_SI_cDgJbLqs7Lb08Hs_intercept=true; QSI_SI_cYoAhbmPMT60Z14_intercept=true; dx-test-users-onboarding-=true; _ga_XJRJL56B0Z=GS1.1.1695448191.5.1.1695449760.0.0.0; mp_spending-tracking_budget-pill=2023-09-23T16:26:34.663-03:00; _gcl_aw=GCL.1695581531.Cj0KCQjwvL-oBhCxARIsAHkOiu1FLl8EgVowemq0hMSsIssBsZOwP-KguYrL25P57jxWUHka_GWeVeoaAhM_EALw_wcB; cookiesPreferencesLoggedFallback=%7B%22userId%22%3A1367070490%2C%22categories%22%3A%7B%22advertising%22%3Atrue%2C%22functionality%22%3Anull%2C%22performance%22%3Anull%2C%22traceability%22%3Atrue%7D%7D; QSI_SI_23SnzFDvtxRGSZ8_intercept=true; _csrf=vh3jkc15zbQIP5oNVCx4NNPb; cookiesPreferencesLogged=%7B%22userId%22%3A1367070490%2C%22categories%22%3A%7B%22advertising%22%3Atrue%2C%22functionality%22%3Anull%2C%22performance%22%3Anull%2C%22traceability%22%3Atrue%7D%7D; _mldataSessionId=66bcdd55-54e2-4589-bb48-055ca13b4e99; completeness_is_collapsed=false; edsid=5347cb78-12d4-3326-b403-6bddedced44f-1697687155857; p_edsid=dcd3c064-9b87-3632-bbcd-19e8fe62a4f1-1697687155870; _mp_ga_gid=GA1.3.781492846.1697687156; _mp_ci=573620295.1691940781; _mp_dc=1; _hjIncludedInSessionSample_492923=1; _hjSession_492923=eyJpZCI6IjAzYzQzMTA5LTViZjItNDVmYy1hYTQzLTM0MjM0MmI1Yjc2MiIsImNyZWF0ZWQiOjE2OTc2ODcxNTkwMDIsImluU2FtcGxlIjp0cnVlLCJzZXNzaW9uaXplckJldGFFbmFibGVkIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=1; cto_bundle=Usu4vV9HSWpUU05FazlFYkdEdThRR2xWMVMybFk4VThwJTJCemduREVMQUpwWUFRY2I5UU5jWHFQY2lBNXhKcGVnbUxZR0JOZExYWk1zbjlzYnBWNFBuY0laQVMxYVM5VCUyQkF1c1Y1TlREd0xCcUl4anU0SHolMkZTMnNreEkwZHBoRTRZeGYwbFBPMjg2Vlp1MGZaZG1uYlFLNjElMkJzJTJGeWhzbXVpUzBKWjdhYnU2MXphYnNadzFRTUlXOERjdDJMZEJEVlNEdzJnYXhKdGp6M0pWWjQ2ZXFCNW5WUkViQSUzRCUzRA', // insira o cookie completo aqui
    'device-memory': '4',
    'downlink': '1.35',
    'dpr': '1',
    'ect': '3g',
    'referer': 'https://www.mercadopago.com.br/activities/1?type=transfer_received',
    'rtt': '550',
    'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'viewport-width': '806',
    'x-csrf-token': 'svcYGe6V-GXC5hXCvXWBSn69BgieWvJjVly0',
    'x-newrelic-id': 'XQ4OVF5VGwYFXVNUAwMH'
};








app.get('/comprovante', async (req, res) => {
  const link = req.query.id; // Obtém o ID da série a partir do parâmetro da URL

  try {
    const response1 = await axios.get("https://www.mercadopago.com.br" + link.replace("/activities/detail/", "/activities/api/detail/"), { headers });
    const link2 = response1.data.data.sections[3][0].data.link;

    const response2 = await axios.get(link2, {
      headers,
      responseType: 'arraybuffer'
    });

    const pdfBuffer = Buffer.from(response2.data);
    const base64PDF = pdfBuffer.toString('base64');

    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <html>
        <head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.min.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
            }
            #the-canvas {
              display: block;
              position: absolute;
              top: 0;
              left: 0;
            }
          </style>
        </head>
        <body>
          <div>
            <canvas id="the-canvas"></canvas>
          </div>
          <script>
            var pdfData = atob('${base64PDF}');
            var loadingTask = pdfjsLib.getDocument({ data: pdfData });
            loadingTask.promise.then(function(pdf) {
              var scale = 1; // Defina o valor de escala para 1 para evitar o zoom
              var pageNum = 1;
              pdf.getPage(pageNum).then(function(page) {
                var viewport = page.getViewport({ scale: scale });

                var canvas = document.getElementById('the-canvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                var renderContext = {
                  canvasContext: context,
                  viewport: viewport
                };
                page.render(renderContext);
              });
            });
          </script>
        </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao obter o PDF: ' + error.message);
  }
});


app.get('/semana', async(req, res) => {
  let total = 0;
  let page = 1;
  let dailyTotals = {};
  let ttoalpix = 0

  let valotTotal = 0
  let maiorLucroData = 0
  let maiorLucro = 0
  let mediaPorDia = 0

  const getTransactions = async (page) => {
      const response = await axios.get(`https://www.mercadopago.com.br/activities/api/activities/list?period=last_week&page=${page}&listing=activities`, { headers });
      ttoalpix = response.data.totalResults
      return response.data.results;
  }

  const calculateTotal = async () => {
      while (true) {
          const transactions = await getTransactions(page);
          if (transactions.length === 0) break;
      
          transactions.forEach(transaction => {
              if (transaction.title === 'Transferência Pix recebida') {
                  const value = parseFloat(`${transaction.amount.fraction}.${transaction.amount.cents}`);
                  total += value;

                  const date = new Date(transaction.creationDate).toISOString().split('T')[0];
                  if (!dailyTotals[date]) {
                      dailyTotals[date] = 0;
                  }
                  dailyTotals[date] += value;
              }
          });

          page++;
      }

      valotTotal = total.toFixed(2)
      maiorLucroData = Object.keys(dailyTotals).reduce((a, b) => dailyTotals[a] > dailyTotals[b] ? a : b);
      maiorLucro = dailyTotals[maiorLucroData].toFixed(2)
      mediaPorDia = total.toFixed(2)/7

      // Obtendo a data atual no formato do Brasil
const dataAtual = new Date();
const dia = String(dataAtual.getDate()).padStart(2, '0');
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês começa do zero
const ano = dataAtual.getFullYear();
const dataAtualFormatada = `${dia}/${mes}/${ano}`;

// Obtendo a data de 7 dias atrás
const dataSeteDiasAtras = new Date();
dataSeteDiasAtras.setDate(dataSeteDiasAtras.getDate() - 7);
const diaSeteDiasAtras = String(dataSeteDiasAtras.getDate()).padStart(2, '0');
const mesSeteDiasAtras = String(dataSeteDiasAtras.getMonth() + 1).padStart(2, '0'); // O mês começa do zero
const anoSeteDiasAtras = dataSeteDiasAtras.getFullYear();
const dataSeteDiasAtrasFormatada = `${diaSeteDiasAtras}/${mesSeteDiasAtras}/${anoSeteDiasAtras}`;

// Exibindo no console
console.log('Data atual no formato do Brasil:', dataAtualFormatada);
console.log('Data de 7 dias atrás no formato do Brasil:', dataSeteDiasAtrasFormatada);


      // Formatando a data para o formato brasileiro
      const [year, month, day] = maiorLucroData.split('-');
      const formattedDate = `${day}/${month}/${year}`;

      // Calculando a data inicial (7 dias atrás)
      const initialDateObj = new Date();
      initialDateObj.setDate(initialDateObj.getDate() - 7);
      const initialDate = `${initialDateObj.getDate()}/${initialDateObj.getMonth()+1}/${initialDateObj.getFullYear()}`;

      res.send(`
      <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
            body { 
                font-family: 'Roboto', sans-serif; 
                margin: 0; 
                padding: 0; 
                background-color: #f0f0f0; 
            }
            .container { 
                max-width: 600px; 
                margin: auto; 
                padding: 20px; 
                background-color: #fff; 
                box-shadow: 1px 1px 3px rgba(0,0,0,0.1); 
            }
            h1 { 
                color: #333; 
                text-align: center;
            }
            p { 
                color: #666; 
                border-bottom: 1px solid #ddd;
                padding-bottom: 10px;
            }
            .logo {
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <img src="https://images.vexels.com/media/users/3/263260/isolated/preview/fd56d6553b8ad0b4ffb08c5515f131da-carteira-com-notas-de-da-lar.png" alt="Logo" class="logo">
            <h1>Resumo Semanal</h1>
            <p>Informações entre dia ${dataSeteDiasAtrasFormatada} até ${dataAtualFormatada}</p>
            <p>Valor feito nos ultimos 7 dias: R$ ${valotTotal}</p>
            <p>Data com maior lucro: ${formattedDate}, com um total de R$ ${maiorLucro}</p>
            <p>Média por dia: R$ ${mediaPorDia.toFixed(2)}</p>
        </div>
    </body>
</html>
      `);
  }

  calculateTotal();
});

app.get('/', async(req, res) => {


    axios.get('https://www.mercadopago.com.br/activities/api/activities/list?page=1&type=transfer_received&listing=activities', { headers })
        .then(async response => {
            const results = response.data.results;

           const responseX = await axios.get('https://www.mercadopago.com.br/activities/api/activities/list?period=today&page=1&type=transfer_received&listing=activities', { headers })
  
        let total = 0; // Inicializando a variável total
        for (let money of responseX.data.results) {
            total += parseFloat(money.amount.fraction + '.' + money.amount.cents);
        }

        console.log("O valor total é: R$" + total);
   

            let html = `<!DOCTYPE html>
            <html lang="pt-BR">
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <link rel="preconnect" href="https://www.google-analytics.com">
              <link rel="preconnect" href="https://www.google.com">
              <link rel="preconnect" href="https://data.mercadolibre.com">
              <link rel="preconnect" href="https://http2.mlstatic.com">
              <style>
                /* Estilos gerais */
                * {
                  box-sizing: border-box;
                  margin: 0;
                  padding: 0;
                }
            
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f0f0f0;
                }
            
                .container {
                  max-width: 1200px;
                  margin: 0 auto;
                }
            
                .header {
                  background-color: #1E90FF
                  color: white;
                  padding: 20px;
                  display: flex;
    justify-content: space-between;
    align-items: center;
                }
                
                .header__title {
                  color: #2F4F4F;
                  font-size: 20px; /* Aumentei o tamanho da fonte para destacar o título */
                  text-align: center;
                  font-family: 'Helvetica Neue', sans-serif; /* Alterei a fonte para Helvetica Neue, que é conhecida por seu visual limpo e moderno */
                  font-weight: 300; /* Reduzi o peso da fonte para um visual mais leve e minimalista */
                  text-shadow: none; /* Removi a sombra do texto para um visual mais limpo */
                  letter-spacing: 1px; /* Adicionei espaçamento entre as letras para melhorar a legibilidade */
              }
              
 
                /* Estilos da lista de atividades */
                .activities-list {
                  padding: 20px;
                }
            
                .activities-list__title {
                  font-size: 24px;
                  font-weight: bold;
                  margin-bottom: 10px;
                }
            
                .activities-list__item {
                  display: flex;
                  align-items: center;
                  border-bottom: 1px solid #ccc;
                  padding: 10px;
                }
            
                .activities-list__avatar {
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  overflow: hidden;
                  margin-right: 10px;
                }
            
                .activities-list__avatar img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
            
                .activities-list__content {
                  flex-grow: 1;
                }
            
                .activities-list__title {
                  font-size: 18px;
                  font-weight: normal;
                  margin-bottom: 5px;
                  color: blue; /* Adicionando a cor azul */
                }
                
            
                .activities-list__description {
                  font-size: 16px;
                  color: #666;
                }
            
                .activities-list__actions {
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                }
            
                .activities-list__price {
                  font-size: 20px;
                  font-weight: bold;
                  color: green;
                }
            
                .activities-list__time {
                  font-size: 14px;
                  color: #999;
                  margin-bottom: 5px;
                }
            
                .red-text {
                  color: #DC143C;
                  font-family: 'Arial', sans-serif; /* Exemplo de fonte - ajuste conforme necessário */
                  font-weight: bold; /* Texto em negrito */
             
                }
                
                .activities-list__button {
                  display: inline-block;
                  padding: 5px 10px;
                  border-radius: 5px;
                  background: #8A2BE2;
                  color: white;
                  text-decoration: none;
                  font-weight: bold; /* Texto em negrito */
                  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Destaque de texto */
                }
                
                .header__button {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #4CAF50; /* Green */
                  border: none;
                  color: white;
                  text-align: center;
                  text-decoration: none;
                  font-size: 16px;
                  margin: 4px 2px;
                  transition-duration: 0.4s;
                  cursor: pointer;
              
                  /* Adicionado para tornar o botão arredondado e destacado */
                  border-radius: 12px; /* Arredonda os cantos do botão */
                  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); /* Adiciona sombra ao botão */
              }
              
              .header__button:hover {
                  background-color: white; 
                  color: black; 
              }

                /* Estilos do rodapé */
                .footer {
                  background-color:#333; 
                    color:white; 
                    padding-top :20px; 
                    padding-bottom :20px; 
                    text-align :center; 
                    margin-top :20px; 
                    font-size :14px; 
                    line-height :1.5; 
                    }
                
                    /* Estilos para telas pequenas (até 600px de largura) */
                    @media (max-width :600 px) { 
                        .activities-list__item { 
                            flex-direction :column; 
                            align-items :flex-start; 
                            } 
                        
                        .activities-list__actions { 
                            align-items :flex-start; 
                            margin-top :10 px; 
                            } 
                        
                        } 
            
                
            </style>
            </head>
            <body>
            <div class="container">
            <header class="header">
            <a href="/semana" class="header__button">Resumo Semanal</a>
            <div class="header__title">SALDO DE HOJE: R$${total}</div>
         
        </header>
            <section class="activities-list">
            <ul class="activities-list__content">
            `;
            results.forEach(result => {
              const formattedDate2 = new Date(result.creationDate).toLocaleString('pt-BR', { timeZone:'America/Sao_Paulo' });
            
              const currentDate = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
              const formattedDate = new Date(result.creationDate).toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
          
              // Adicionando a classe 'red-text' se a data formatada for igual à data atual
              const dateColorClass = currentDate === formattedDate ? 'red-text' : '';
          
            html += `
            <li class="activities-list__item">
            <div class="activities-list__avatar">
            <img decoding="async" src="https://http2.mlstatic.com/storage/activities-middle-end/activities-assets/avatars-v2/svg/ic_account_fund.svg" class="ui-avatar__icon ui-avatar__icon--ic_account_fund" data-src-fallback="https://http2.mlstatic.com/storage/activities-middle-end/activities-assets/avatars-v2/svg/ic_user_picture.svg">
            </div>
            <div class="activities-list__content">
            <div class="activities-list__title">Pix Recebido!</div>
            <div class="activities-list__description">${result.description}</div>
            </div>
            <div class="activities-list__actions">
            <div class="activities-list__price">${result.amount.symbol}${result.amount.fraction}</div>
            <time class="activities-list__time ${dateColorClass}">${formattedDate2}</time>
            <a href="/comprovante?id=${result.link}" class="activities-list__button">Comprovante</a>
</div>
</li>
`;
});

html += `
</ul>
</section>
<footer class="footer">
<p>Site criado por Higor Oliveira, usando a api não oficial do Mercado Pago. </p>
</footer>
</div>
</body>
</html>
 
        `;
            res.send(html);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Ocorreu um erro ao obter os dados da API.');
        });
});

  
  

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));