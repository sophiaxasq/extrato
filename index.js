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

app.get('/', (req, res) => {
    axios.get('https://www.mercadopago.com.br/activities/api/activities/list?page=1&type=transfer_received&listing=activities', { headers })
        .then(response => {
            const results = response.data.results;
            let html = `
            <!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://www.google-analytics.com">
    <link rel="preconnect" href="https://www.google.com">
    <link rel="preconnect" href="https://data.mercadolibre.com">
    <link rel="preconnect" href="https://http2.mlstatic.com">
    <style>
        .activities-list {
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        .ui-list {
            list-style: none;
            padding: 0;
        }
        .ui-list__head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .ui-list__title {
            font-size: 20px;
            font-weight: bold;
        }
        .ui-row__link {
            display: flex;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
            text-decoration: none;
            color: #333;
        }
        .ui-row__col {
            flex: 1;
            padding: 0 10px;
        }
        .ui-action-row__title {
            font-size: 16px;
            font-weight: bold;
        }
        .c-description-classic__status {
            font-size: 14px;
            color: #777;
        }
        .andes-money-amount {
            font-size: 16px;
        }
        .c-activity-row__time {
            font-size: 14px;
            color: #888;
        }
    </style>
</head>
<body>
<div class="activities-list">
    <div class="ui-list c-activity-list">
        <div class="ui-list__head">
            <div class="ui-list__title">Seu extrato:</div>
        </div>
        <ul class="ui-list__content">
            `;
            results.forEach(result => {
                const formattedDate = new Date(result.creationDate).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

                html += `
            <a class="ui-row__link">
              <div class="ui-row__col ui-row__col--heading">
                <div class="ui-avatar c-activity-avatar">
                  <img decoding="async" src="https://http2.mlstatic.com/storage/activities-middle-end/activities-assets/avatars-v2/svg/ic_account_fund.svg" class="ui-avatar__icon ui-avatar__icon--ic_account_fund" data-src-fallback="https://http2.mlstatic.com/storage/activities-middle-end/activities-assets/avatars-v2/svg/ic_user_picture.svg">
                </div>
              </div>
              <div class="ui-row__col ui-row__col--content">
                <div class="ui-action-row__content">
                  <div class="ui-action-row__title u-truncate">Pix Recebido!</div>
                  <div class="ui-action-row__description">
                    <div class="c-description-classic">
                      <span class="c-description-classic__status u-truncate c-description-classic__status--no-feedback">${result.description}<span class="c-description-classic__email"></span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-row__col ui-row__col--actions">
                <div class="ui-action-row__actions">
                  <div class="ui-action-row__extra-actions">
                    <div class="c-activity-row__extra-action c-activity-row__extra-action--margin">
                      <span class="andes-money-amount c-activity-row__price--classic c-activity-row__price--green andes-money-amount--cents-comma" style="font-size: 16px;">
                      
                        <span class="andes-money-amount__currency-symbol" aria-hidden="true">${result.amount.symbol}</span>
                        <span class="andes-money-amount__fraction" aria-hidden="true">${result.amount.fraction}</span>
                      </span>
                      <time class="c-activity-row__time">${formattedDate}</time>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          `;
            });

            html += `
    
    
            </ul>
            </div>
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