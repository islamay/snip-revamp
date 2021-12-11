import { v4 as uuidv4 } from 'uuid'

type postId = string;
type id = string;
type parentId = string | null;
type posterId = string
type content = string

interface PostCommentProp {
    postId: postId;
    parentId: parentId;
    posterId: posterId;
    content: content;
}

interface PostCommentObject extends PostCommentProp {
    id: id;
    date: string;
}

class PostComment {
    public postId: postId;
    public id: id;
    public parentId: parentId;
    public posterId: posterId;
    public content: content;
    public date: string;


    constructor({ postId, parentId, posterId, content }: PostCommentProp) {
        const currentDate = new Date()
        const currentISOStringDate = currentDate.toISOString()

        this.postId = postId
        this.id = uuidv4()
        this.parentId = parentId
        this.posterId = posterId
        this.content = content
        this.date = currentISOStringDate
    }

    public createThisObject(): PostCommentObject {
        return {
            postId: this.postId,
            id: this.id,
            parentId: this.parentId,
            posterId: this.posterId,
            content: this.content,
            date: this.date
        }
    }

}

export default PostComment