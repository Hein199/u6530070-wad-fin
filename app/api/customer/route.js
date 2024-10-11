import Customer from "@/models/Customer";
import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();
        const customers = await Customer.find();
        return NextResponse.json(customers);
    } catch (error) {
        console.error(error);
        return NextResponse.error("Failed to fetch suppliers", 500);
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const customer = new Customer(body);
        await customer.save();
        return NextResponse.json(customer, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.error("Failed to create supplier", 500);
    }
}
