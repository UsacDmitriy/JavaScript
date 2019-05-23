let json = '{"id": 2 }';

try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error('Incorrect data: missing name')
    }
}  catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);

    console.log(`We get error: ${err.name} `);
} finally {
    console.log("I am always here!");
}

console.log('I will do it in any cases!');