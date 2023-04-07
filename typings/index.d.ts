interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
}

namespace Express {
    interface Request {
        user: IUser;
    }
}

namespace lusca {
    interface cspOptions {
        nonce: string;
    }
}