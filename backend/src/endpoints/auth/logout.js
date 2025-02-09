import deleteSession from "#functions/sessions/deleteSession";

export default {
    method: "delete",
    options: {
        authRequired: true
    },
    endpoint: async (req, res) => deleteSession(req.session.user).then(() => res.status(205).json()).catch(() => res.status(500).json({
        message: "Something went wrong."
    }))
}