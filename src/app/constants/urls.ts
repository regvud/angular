const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'
const urls = {
    users: {
        base: `${baseURL}${users}`,
        byID: (id: number): string => `${baseURL}${users}/${id}`
    },
    posts: {
        base: `${baseURL}${posts}`,
        byID: (id: number): string => `${baseURL}${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}
