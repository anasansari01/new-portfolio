import { connectDB } from "@/db/connectDB";
import FormResponse from "@/models/formResponse.model";
import { NextResponse } from "next/server";

async function sendMails(name: string, email: string, message: string, req: Request) {
    const url = req.headers.get("origin");

    await fetch(`${url}/api/email/send`, {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const { name, email, message } = await req.json();

        const formResponse = new FormResponse({ name, email, message });

        await Promise.all([
            await formResponse.save(),
            await sendMails(name, email, message, req),
        ]);

        return NextResponse.json(
            { message: "Form submitted successfully" },
            { status: 200 }
        );
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { message: "Error submitting form" },
            { status: 500 }
        );
    }
}
