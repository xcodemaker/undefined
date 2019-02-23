export class Rant {
    ok:    boolean;
    posts: Post[];
}

export class Post {
    votes:        number;
    content:      string;
    id:           string;
    timestamp:    number;
    author:       string;
    isMyPost:     boolean;
    displayTime:  string;
    myVote:       number;
    commentCount: number;
}
