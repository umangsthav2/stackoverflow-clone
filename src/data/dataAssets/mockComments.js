const mockComments =
    [
        {
            "comment_id": 1,
            "comment_content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste deserunt error blanditiis doloremque eaque repellat debitis? Quasi corrupti quam pariatur quae unde labore dolores cum fugit libero praesentium, accusantium nam!",
            "commenter_id": 3,
            "post_id": 101,
            "timestamp": "2023-10-25T08:12:45Z",
            "likes": 2,
            "is_edited": false
        },
        {
            "comment_id": 2,
            "comment_content": "This is exactly what I was looking for, thanks for sharing!",
            "commenter_id": 15,
            "post_id": 101,
            "timestamp": "2023-10-25T09:23:11Z",
            "likes": 5,
            "is_edited": false
        },
        {
            "comment_id": 3,
            "comment_content": "I have to disagree with point #3. In my experience, the opposite has been true.",
            "commenter_id": 7,
            "post_id": 101,
            "timestamp": "2023-10-25T10:45:01Z",
            "likes": 0,
            "is_edited": true
        },
        {
            "comment_id": 4,
            "comment_content": "Could you elaborate more on the second technique? Maybe provide an example?",
            "commenter_id": 5,
            "post_id": 101,
            "timestamp": "2023-10-25T11:30:58Z",
            "likes": 1,
            "is_edited": false
        },
        {
            "comment_id": 5,
            "comment_content": "First!",
            "commenter_id": 2,
            "post_id": 101,
            "timestamp": "2023-10-25T08:01:05Z",
            "likes": -3,
            "is_edited": false
        },
        {
            "comment_id": 6,
            "comment_content": "Saved for later. This is a fantastic resource.",
            "commenter_id": 1,
            "post_id": 101,
            "timestamp": "2023-10-25T14:22:34Z",
            "likes": 3,
            "is_edited": false
        },
        {
            "comment_id": 7,
            "comment_content": "The link in the third paragraph seems to be broken.",
            "commenter_id": 4,
            "post_id": 101,
            "timestamp": "2023-10-25T15:10:15Z",
            "likes": 4,
            "is_edited": false
        },
        {
            "comment_id": 8,
            "comment_content": "Has anyone tried this with the new update? Does it still work the same way?",
            "commenter_id": 9,
            "post_id": 101,
            "timestamp": "2023-10-25T16:40:22Z",
            "likes": 0,
            "is_edited": false
        },
        {
            "comment_id": 9,
            "comment_content": "This method is outdated. There's a much more efficient way to do this now.",
            "commenter_id": 3,
            "post_id": 101,
            "timestamp": "2023-10-25T18:05:49Z",
            "likes": 2,
            "is_edited": false
        },
        {
            "comment_id": 10,
            "comment_content": "😂😂 This reminded me of a project I completely failed at last year. Glad I'm not the only one!",
            "commenter_id": 2,
            "post_id": 101,
            "timestamp": "2023-10-25T19:31:07Z",
            "likes": 7,
            "is_edited": false
        },
        {
            "comment_id": 11,
            "comment_content": "Here's a code snippet that builds on your idea...",
            "commenter_id": 1,
            "post_id": 101,
            "timestamp": "2023-10-25T20:15:33Z",
            "likes": 12,
            "is_edited": true
        },
        {
            "comment_id": 12,
            "comment_content": "I'm confused by the terminology used here. What do you mean by 'flux capacitor' in this context?",
            "commenter_id": 4,
            "post_id": 101,
            "timestamp": "2023-10-26T08:55:18Z",
            "likes": 0,
            "is_edited": false
        },
        {
            "comment_id": 13,
            "comment_content": "This post changed my entire perspective. Thank you.",
            "commenter_id": 8,
            "post_id": 101,
            "timestamp": "2023-10-26T10:12:44Z",
            "likes": 6,
            "is_edited": false
        },
        {
            "comment_id": 14,
            "comment_content": "*sigh* Another post that completely misses the point.",
            "commenter_id": 12,
            "post_id": 101,
            "timestamp": "2023-10-26T12:27:02Z",
            "likes": 1,
            "is_edited": false
        },
        {
            "comment_id": 15,
            "comment_content": "Can this be applied to a non-technical field like marketing?",
            "commenter_id": 2,
            "post_id": 101,
            "timestamp": "2023-10-26T13:45:51Z",
            "likes": 2,
            "is_edited": false
        },
        {
            "comment_id": 16,
            "comment_content": "The real gem is hidden in the comments. Thanks, @user_4 (comment #11)!",
            "commenter_id": 6,
            "post_id": 101,
            "timestamp": "2023-10-26T15:20:19Z",
            "likes": 5,
            "is_edited": false
        },
        {
            "comment_id": 17,
            "comment_content": "I've been using this for years. It's rock solid.",
            "commenter_id": 1,
            "post_id": 101,
            "timestamp": "2023-10-26T17:08:56Z",
            "likes": 3,
            "is_edited": false
        },
        {
            "comment_id": 18,
            "comment_content": "Does anyone have a link to the original research paper mentioned?",
            "commenter_id": 5,
            "post_id": 101,
            "timestamp": "2023-10-26T19:22:40Z",
            "likes": 0,
            "is_edited": false
        },
        {
            "comment_id": 19,
            "comment_content": "I translated this post into Spanish for my team. Great work!",
            "commenter_id": 4,
            "post_id": 101,
            "timestamp": "2023-10-26T21:15:11Z",
            "likes": 8,
            "is_edited": false
        },
        {
            "comment_id": 20,
            "comment_content": "Waiting for part 2!",
            "commenter_id": 1,
            "post_id": 101,
            "timestamp": "2023-10-27T07:05:29Z",
            "likes": 1,
            "is_edited": false
        },
        {
            "comment_id": 21,
            "comment_content": "This is getting out of hand. Now there are two of them! (Reference intended)",
            "commenter_id": 2,
            "post_id": 101,
            "timestamp": "2023-10-27T14:30:22Z",
            "likes": 15,
            "is_edited": false
        }
    ]
    ;

export default mockComments;