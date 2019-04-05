function learnJS(lang, callback) {
    console.log('I am learning ' + lang);
    callback();
}

learnJS('JavaScrit', done);

function done () {
    console.log('I have done 3rd lesson');
}