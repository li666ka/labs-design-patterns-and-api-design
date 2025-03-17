type HttpResponse = {
    status: number;
    message: string;
};

const statuses: { status: number; message: string }[] = [
    { status: 200, message: "OK" },
    { status: 201, message: "Created" },
    { status: 400, message: "Bad Request" },
    { status: 401, message: "Unauthorized" },
    { status: 403, message: "Forbidden" },
    { status: 404, message: "Not Found" },
    { status: 500, message: "Internal Server Error" },
    { status: 502, message: "Bad Gateway" },
    { status: 503, message: "Service Unavailable" }
];

export function getRandomResponse(): HttpResponse {
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
}