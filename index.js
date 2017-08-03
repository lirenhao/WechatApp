import 'whatwg-fetch'

document.getElementById('login').onclick = () => {
    const scope = 'snsapi_userinfo'
    const state = '_' + (+new Date())
    Wechat.auth(scope, state, function (response) {
        alert(JSON.stringify(response))
    }, function (reason) {
        alert('Failed: ' + reason)
    });
}

document.getElementById('pay').onclick = () => {
    fetch('http://47.93.100.211:3000/wechat')
        .then(res => res.json())
        .then(json => {
            alert(JSON.stringify(json));
            Wechat.sendPaymentRequest(json,
                () => {
                    alert('Success');
                },
                (reason) => {
                    alert('Failed: ' + reason)
                })
        })
        .catch(e => {
            console.log('parsing failed', e)
        })
}