import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, country, description } = body;

        if (!name || !email || !phone || !country || !description) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);

        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];

        await sheet.addRow({
            Name: name,
            Email: email,
            Phone: phone,
            Description: description,
            Country: country,
            Date: new Date().toLocaleString(),
        });

        return NextResponse.json({ message: "Success" }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error while saving data" }, { status: 500 });
    }
}