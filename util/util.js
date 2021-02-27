export const fetchData = (user) => {
    return fetch(`https://api.github.com/users/${user}/gists`)
            .then(req => req.json())
}

export const formatGistData = (data) => {
    return data.map(gist => {
        return {
            created: new Date(gist.created_at).toLocaleDateString(), 
            name: gist.description || 'Gist:' + gist.id, 
            id: gist.id, 
            avatar: gist.owner.avatar_url, 
            forksUrl: gist.forks_url, 
            updated: new Date(gist.updated_at).toLocaleDateString(),
            username: gist.owner.login,
            files: gist.files
        }
    });
}

export const formatForkData = (data) => {
    return data.map(fork => {
        return {
            id: fork.owner.id, 
            avatar: fork.owner.avatar_url, 
            username: fork.owner.login
        }
    });
}