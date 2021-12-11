
const sample = [
    {
        "newsId": 1,
        "id": 1,
        "replyToId": null,
        "publisher": "Dean",
        "avatar": "",
        "comment": "Hi, There",
        "date": "Mon Nov 22 2021 22:33:00 GMT+0800 (Singapore Standard Time)"
    },
    {
        "newsId": 1,
        "id": 2,
        "replyToId": "1",
        "publisher": "Dean2",
        "avatar": "",
        "comment": "Hi, There",
        "date": "Mon Nov 22 2021 22:33:00 GMT+0800 (Singapore Standard Time)"
    },
]

const obj = {
    parent: sample[0],
    child: [
        sample[1]
    ]
}


