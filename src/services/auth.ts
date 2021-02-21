interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export  function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "siaidafjfeoaf949rue34904232ir94jrairfhi08hqjijfo",
                user: {
                    name: "Andressa",
                    email:'andressa@gmail.com'
                }
            });
        }, 2000)
    });
}