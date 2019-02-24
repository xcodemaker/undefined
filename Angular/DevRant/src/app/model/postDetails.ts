export class New {
    ok:   boolean;
    post: PostDetail;
}

export class PostDetail {
    votes:       number;
    content:     string;
    id:          string;
    timestamp:   number;
    author:      string;
    isMyPost:    boolean;
    displayTime: string;
    myVote:      number;
    comments:    CommentItem[];
}

export class CommentItem {
    comment:     string;
    id:          string;
    timestamp:   number;
    author:      string;
    isMyComment: boolean;
    displayTime: string;
}