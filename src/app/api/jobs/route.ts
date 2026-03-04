import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const search = searchParams.get("search") || "";
        const department = searchParams.get("department") || "";
        const location = searchParams.get("location") || "";
        const type = searchParams.get("type") || "";

        let query = supabaseAdmin
            .from("jobs")
            .select("*")
            .eq("is_active", true)
            .order("posted_date", { ascending: false });

        // Apply filters
        if (search) {
            query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%,department.ilike.%${search}%`);
        }
        if (department) {
            query = query.eq("department", department);
        }
        if (location) {
            query = query.eq("location", location);
        }
        if (type) {
            query = query.eq("type", type);
        }

        const { data, error } = await query;

        if (error) {
            console.error("Supabase Error:", error);
            return NextResponse.json(
                { error: "Failed to fetch jobs" },
                { status: 500 }
            );
        }

        return NextResponse.json({ jobs: data }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
