export interface HttpView {
    headers: Header;
}

export interface Header {
    Accept: string;
    Host: string;
    UserAgent: string;
}