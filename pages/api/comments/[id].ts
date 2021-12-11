import type { NextApiRequest, NextApiResponse } from 'next';
import jsonServerMockApi from 'src/api/jsonServerMock';

export default async function handleComment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query

    switch (req.method) {
        case 'GET':
            try {
                const getComment = await jsonServerMockApi.get(`/comments/${id}`)
                const comment = getComment.data
                res.status(200)
                res.json(comment)
            } catch (error) {
                console.log(error);
                res.status(400)
                res.json('Not Found')
            }

    }


}