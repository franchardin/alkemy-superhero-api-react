import {getSortedPostsData} from '../../lib/posts'
import post from '../scripts/cache'

const posts = process.env.NODE_ENV === 'develop' ? require('../scripts/cache')

export default(req, res) => {
    const results = req.query.q ?
        posts.filter(post => post.name.toLowerCase().includes(req.query.q)): []
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({results}))
}