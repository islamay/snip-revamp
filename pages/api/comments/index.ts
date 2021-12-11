import type { NextApiRequest, NextApiResponse } from 'next';
import jsonServerMockApi from 'src/api/jsonServerMock';
import PostComment from 'src/class/postComment';

export default async function commentHandler(
    req: NextApiRequest,
    res: NextApiResponse,
) {


    switch (req.method) {
        case 'GET':
            try {
                const query = req.query
                const getComments = await jsonServerMockApi.get('/comments', { params: query })
                const comments = getComments.data

                res.status(200)
                res.json(comments)
            } catch (error) {

                res.status(500)
                res.json('Internal Server Error')
            } break;


        case 'POST':
            try {
                const postId = req.body.postId
                const parentId = req.body.parentId
                const posterId = req.body.posterId
                const content = req.body.content
                console.log(postId + 1);
                console.log('Hey');


                // ParentId Is Not filtered because
                // It Can Be Null
                if (!postId || !posterId || !content) throw new Error('Params Not Fullfilled')
                if (typeof postId !== 'string') throw new Error('PostId Must Be String')
                if (parentId !== null && typeof parentId !== 'string') throw new Error('ParentId Must Be String')
                if (typeof posterId !== 'string') throw new Error('PosterId Must Be String')
                if (typeof content !== 'string') throw new Error('Content Must Be String')


                const comment = new PostComment({ postId, parentId, posterId, content })
                const commentObject = comment.createThisObject()

                const createComment = await jsonServerMockApi.post('/comments', commentObject)
                console.log('Hi');
                res.status(201)
                res.json(commentObject)

            } catch (error: any) {
                res.status(400)
                res.json({ errorMessage: error.message })
            } break;
    }

}