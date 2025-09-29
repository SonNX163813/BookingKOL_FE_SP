import { post } from "../config/axios-config"
import { API_PATHS } from "../constants/apiPath"

export const postCallSendAI = async ({
    question
}) => {
    return await post({
        url: API_PATHS.AI.chatAI,
        data: {
            question
        }
    })
}