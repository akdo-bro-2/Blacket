export default {
    priority: 98,
    middleware: async (req, _, next) => {
        if (!req.headers.authorization) return next();

        let token = Buffer.from(req.headers.authorization, "base64").toString("utf8");
        if (typeof token !== "string") return next();

        try {
            token = JSON.parse(token);
        } catch {
            return next();
        }
        if (typeof token.id !== "string" || typeof token.user !== "string" || typeof token.createdAt !== "number") return next();

        const session = await global.redis.GET(`blacket-session:${token.user}`).then(session => JSON.parse(session)).catch(() => null);
        if (!session) return next();

        if (session.id !== token.id || session.user !== token.user || session.createdAt !== token.createdAt) return next();

        req.session = session;

        next();
    }
}
