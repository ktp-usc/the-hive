"use server";

import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormData = {
    name: string;
    email: string;
    phone: string;
    comment: string;
};


export const sendEmail = async (formData: FormData) => {
    await resend.emails.send({
        to: "noahack22@gmail.com",
        from: "HIVE Contact <onboarding@resend.dev>",
        subject: "New Message from HIVE User",
        html: `
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Comment:</strong> ${formData.comment}</p>
        `
    });
}