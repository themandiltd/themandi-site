// /pages/api/seated.js

export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", ["GET"]);
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    // Optional: allow ?artistId=... override. Fallback to your ID.
    const artistId =
        (req.query.artistId && String(req.query.artistId)) ||
        "ace7e233-f5a0-4dff-a261-ceb018a953b7";

    // Leon bridges: c7ddffab-826f-43f3-ad52-7055a3a36920

    const url = `https://cdn.seated.com/api/public/v1/artists/${artistId}/tour-events`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json",
                Authorization: process.env.SEATED_API_KEY, // keep your key server-side
            },
            cache: "no-store", // avoid caching if you need fresh results
        });

        if (!response.ok) {
            const text = await response.text().catch(() => "");
            return res.status(response.status).json({
                error: "Upstream error",
                details: text || response.statusText,
            });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Seated API error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
