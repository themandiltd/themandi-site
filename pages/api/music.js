import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(_req, res) {
    const { data, error } = await supabase
        .from("music")
        .select("id,title,artist,url,cover_url,published,sort_index,created_at")
        .eq("published", true)
        .order("sort_index", { ascending: true })
        .order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=600");
    return res.status(200).json({ data });
}
