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
    comments:    Comment[];
}

export class Comment {
    comment:     string;
    id:          string;
    timestamp:   number;
    author:      string;
    isMyComment: boolean;
    displayTime: string;
}