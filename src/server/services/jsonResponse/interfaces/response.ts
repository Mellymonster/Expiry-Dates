export interface StandardResponse {
    statusCode: number;
    serverTime: number;
    message: string;
}

export interface SuccessResponse<T> extends StandardResponse {
    statusCode: 200;
    results: T;
};
