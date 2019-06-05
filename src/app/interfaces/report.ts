export interface Report_game {
    overall: number;
    edgage: string;
    users: number;
    mnum: number;
}
export interface Report_survey {
    overall: number;
    edgage: number;
    users: number;
    mnum: number;
}
export interface Report_page {
    clicked: number;
    pages: number;
    precent: number;
}
export interface Report_leaderboard {
    top5: [string,string];
    high: string;
    name: string;
}
export interface Report_message {
    sms: number;
    email: number;
}
export interface Report_mostgame {
    completed: string;
    title: string;
    total: number;
}
export interface Report_mostclick {
    title: string;
    count: number;
}
export interface Report_resource {
    title: string;
    count: string;
}
