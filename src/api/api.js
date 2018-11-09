import axios from 'axios';

const api = {
    getPosts: () => Promise.resolve({data: [{name: "sam"}, {name: "huy"}]}),
    createNewUsers: (user) => axios.post('/api/user', user)
}

export default api