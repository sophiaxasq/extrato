const axios = require("axios")

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


const getAtividades = async() => {
    axios.get('https://www.mercadopago.com.br/activities/api/activities/list?page=1&type=transfer_received&listing=activities', { headers })
    .then(async response => {
    console.log(response.data)
        })
}


const infoPix = async(url) => {
    axios.get(url.replace("/activities/detail/", "/activities/api/detail/"), { headers })
    .then(async response => {
    console.log(response.data.data.sections[3][0].data.link)
    
        })
}

const comprovante = async() => {
    axios.get('https://www.mercadopago.com.br/money-out/transfer/api/receipt/pix_pdf/65409678073/pix_account/pix_payment.pdf', { headers })
    .then(async response => {
    console.log(response.data)
        })
}

const saldoHoje = async () => {
    axios.get('https://www.mercadopago.com.br/activities/api/activities/list?period=today&page=1&type=transfer_received&listing=activities', { headers })
    .then(async response => {
        let total = 0; // Inicializando a variável total
        for (let money of response.data.results) {
            total += parseFloat(money.amount.fraction + '.' + money.amount.cents);
        }

        console.log("O valor total é: R$" + total);
    })
}


//getAtividades()
//comprovante()
saldoHoje()
//infoPix("https://www.mercadopago.com.br/activities/detail/pix_transfer_mi_movement-63f0668c08aa02d54e3a6c3339d095ba3b0b5ccf")