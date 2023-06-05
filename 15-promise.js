let username = 'anisa';
let password = '123';

const akad = new Promise((resolve, reject) => {
    let id = 123;
    setTimeout(() => {
        if (username === 'anisa' && password === '123') {
            resolve(id)
        } else {
            reject('Invalid username or password')
        }
    }, 3000);
});

function handleResolve(resolveValue) {
    console.log(resolveValue);
}

function handleReject(rejectValue) {
    console.log(rejectValue);
}

akad.then(handleResolve, handleReject);








function getImagePromise(url) {
    var promise = new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';
        request.onload = function() {
            if (request.status === 200) {
              resolve(request.response);
            } else {
              reject(Error('Image load failure:' + request.statusText));
            }
        };
        request.send();
    });
    return promise;
}

// getImagePromise('www.cobain')
// getImagePromise.then(handleResolve, handleReject);