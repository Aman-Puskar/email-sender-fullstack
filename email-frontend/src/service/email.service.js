import { customAxios } from "./helper.js";

export async function sendEmail(emailData) {
    const result = (await customAxios.post(`/email/send`, emailData)).data
    return result;
}


export async function sendEmailWithFile(emailData) {
        const formData = new FormData();

    formData.append("file", emailData.file);

    const requestPayload = {
        to: emailData.to,
        subject: emailData.subject,
        message: emailData.message,
    };

    formData.append(
        "request",
        new Blob([JSON.stringify(requestPayload)], { type: 'application/json' })
    );
        const result = (await customAxios.post(`/email/send-with-file`, formData)).data
        return result;
    }

