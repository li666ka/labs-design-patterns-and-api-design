type HttpResponse = {
    status: number;
    message: string;
    delay: number;
};

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const statusesByMethod: { [key: string]: { status: number, message: string}[] } = {
    'GET': [
        { status: 200, message: "OK" },
        { status: 400, message: "Bad Request" },
        { status: 401, message: "Unauthorized" },
        { status: 403, message: "Forbidden" },
        { status: 404, message: "Not Found" },
        { status: 500, message: "Internal Server Error" },
        { status: 502, message: "Bad Gateway" },
        { status: 503, message: "Service Unavailable" }
    ],
    'POST': [
        { status: 201, message: "Created" },
        { status: 400, message: "Bad Request" },
        { status: 401, message: "Unauthorized" },
        { status: 403, message: "Forbidden" },
        { status: 500, message: "Internal Server Error" },
        { status: 503, message: "Service Unavailable" }
    ],
    'PUT': [
        { status: 200, message: "OK" },
        { status: 400, message: "Bad Request" },
        { status: 401, message: "Unauthorized" },
        { status: 403, message: "Forbidden" },
        { status: 404, message: "Not Found" },
        { status: 500, message: "Internal Server Error" },
        { status: 503, message: "Service Unavailable" }
    ],
    'PATCH': [
        { status: 200, message: "OK" },
        { status: 400, message: "Bad Request" },
        { status: 401, message: "Unauthorized" },
        { status: 403, message: "Forbidden" },
        { status: 404, message: "Not Found" },
        { status: 500, message: "Internal Server Error" },
        { status: 503, message: "Service Unavailable" }
    ],
    'DELETE': [
        { status: 200, message: "OK" },
        { status: 204, message: "No Content" },
        { status: 401, message: "Unauthorized" },
        { status: 403, message: "Forbidden" },
        { status: 404, message: "Not Found" },
        { status: 500, message: "Internal Server Error" },
        { status: 503, message: "Service Unavailable" }
    ]
};

export function getRandomResponse(method: HttpMethod = 'GET'): HttpResponse {
    const availableStatuses = statusesByMethod[method];
    const randomIndex = Math.floor(Math.random() * availableStatuses.length);

    const randomDelay = Math.floor(Math.random() * 20000) // 0 - 20 seconds

    return {
        status: availableStatuses[randomIndex].status,
        message: availableStatuses[randomIndex].message,
        delay: randomDelay
    };
}