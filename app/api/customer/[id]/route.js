import Customer from "@/models/Customer";
import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        await dbConnect();
        const customer = await Customer.findById(params.id);
        if (!customer) {
            return NextResponse.error("Customer not found", 404);
        }
        return NextResponse.json(customer);
    } catch (error) {
        console.error(error);
        return NextResponse.error("Failed to fetch supplier", 500);
    }
}

export async function PUT(request, { params }) {
    try {
        await dbConnect();
        const body = await request.json();
        const customer = await Customer.findByIdAndUpdate(params.id, body, { new: true });
        if (!customer) {
            return new NextResponse("Customer not found", { status: 404 });
        }
        return NextResponse.json(customer);
    } catch (error) {
        console.error(error);
        return NextResponse.error("Failed to update customer", 500);
    }
}

export async function PATCH(request, { params }) {
    try {
        await dbConnect();
        const body = await request.json();
        const customer = await Customer.findByIdAndUpdate(params.id, { $set: body }, { new: true });
        if (!customer) {
            return new NextResponse("Customer not found", { status: 404 });
        }
        return NextResponse.json(customer);
    } catch (error) {
        console.error(error);
        return NextResponse.error("Failed to partially update customer", 500);
    }
}

export async function DELETE(request, { params }) {
    try {
        await dbConnect();
        console.log('Attempting to delete customer with ID:', params.id);
        const customer = await Customer.findByIdAndDelete(params.id);
        if (!customer) {
            return new NextResponse("Customer not found", { status: 404 });
        }
        return new NextResponse("Customer deleted", { status: 200 });
    } catch (error) {
        console.error('Error during customer deletion:', error);
        return new NextResponse("Failed to delete customer", { status: 500 });
    }
}
