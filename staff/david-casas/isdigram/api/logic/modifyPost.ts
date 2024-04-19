import { validate, errors } from 'com'
import { ObjectId} from 'mongodb'

const { SystemError, NotFoundError } = errors


function modifyPost(postId, text, callback) {
    debugger
    validate.text(postId, 'postId', true)
    validate.text(text, 'text')
    const post = postId
    if(post)
        validate.text(text, 'text')
        validate.callback(callback)
        
   
   this.posts.findOne({ _id: new ObjectId(postId), text, date: new Date})
   
    .then(post => {
        
    if (!post) {
        callback(new NotFoundError('post not found'))
            if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')
            return
        }
            
            post.text = text
            
            this.posts.updateOne(post)
        })
    .catch(error => callback(new SystemError(error.message)))
}

export default modifyPost