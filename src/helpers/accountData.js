import * as api from "api.js";

export default async function accountData(path, token, uderId) {
    const res = await api.get(path, token, uderId)
    const data = res.data;
    return { data }
}