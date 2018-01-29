import 'whatwg-fetch'
import 'localforage'
import 'localforage-cordovasqlitedriver'

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

document.getElementById('data').onclick = () => {
    localforage.defineDriver(window.cordovaSQLiteDriver)
        .then(() => {
            localforage.setDriver([
                // Try setting cordovaSQLiteDriver if available,
                window.cordovaSQLiteDriver._driver,
                // otherwise use one of the default localforage drivers as a fallback.
                // This should allow you to transparently do your tests in a browser
                localforage.LOCALSTORAGE
            ]);
        })
}

localforage.setItem()