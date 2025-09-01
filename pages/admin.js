"use client";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

export default function Admin() {
    const [session, setSession] = useState(null);
    const [email, setEmail] = useState("");
    const [list, setList] = useState([]);
    const [form, setForm] = useState({
        title: "",
        artist: "",
        url: "",
        cover_url: "",
        published: true,
        sort_index: 0,
    });

    const isAdmin = useMemo(
        () => !!session?.user?.email && session.user.email === ADMIN_EMAIL,
        [session]
    );

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => setSession(data.session));
        const { data: sub } = supabase.auth.onAuthStateChange((_evt, s) =>
            setSession(s)
        );
        return () => sub.subscription.unsubscribe();
    }, []);

    useEffect(() => {
        if (isAdmin) load();
    }, [isAdmin]);

    async function signIn(e) {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${window.location.origin}/admin`, // 👈 redirect here
            },
        });
        if (error) alert(error.message);
        else alert("Magic link sent. Check your email.");
    }
    async function signOut() {
        await supabase.auth.signOut();
    }

    async function load() {
        const { data, error } = await supabase
            .from("music")
            .select("*")
            .order("sort_index", { ascending: true })
            .order("created_at", { ascending: false });
        if (error) return alert(error.message);
        setList(data || []);
    }

    async function createItem(e) {
        e.preventDefault();
        const payload = { ...form, sort_index: Number(form.sort_index) || 0 };
        const { error } = await supabase.from("music").insert(payload);
        if (error) return alert(error.message);
        setForm({
            title: "",
            artist: "",
            url: "",
            cover_url: "",
            published: true,
            sort_index: 0,
        });
        load();
    }

    async function updateItem(id, patch) {
        const { error } = await supabase
            .from("music")
            .update(patch)
            .eq("id", id);
        if (error) return alert(error.message);
        load();
    }

    async function removeItem(id) {
        if (!confirm("Delete this item?")) return;
        const { error } = await supabase.from("music").delete().eq("id", id);
        if (error) return alert(error.message);
        load();
    }

    // Not logged in
    if (!session) {
        return (
            <div style={{ maxWidth: 460, margin: "80px auto", padding: 16 }}>
                <h1>Admin Login</h1>
                <form
                    onSubmit={signIn}
                    style={{ display: "grid", gap: 8, marginTop: 12 }}
                >
                    <input
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-left text-blue-700 cursor-pointer hover:underline "
                    >
                        Send Magic Link
                    </button>
                </form>
            </div>
        );
    }

    // Logged in but wrong email
    if (!isAdmin) {
        return (
            <div style={{ maxWidth: 460, margin: "80px auto", padding: 16 }}>
                <p>
                    Signed in as <b>{session.user.email}</b>, but not
                    authorized.
                </p>
                <button onClick={signOut} style={{ marginTop: 12 }}>
                    Sign out
                </button>
            </div>
        );
    }

    // Admin view
    return (
        <div style={{ maxWidth: 820, margin: "40px auto", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Music Admin</h1>
                <button onClick={signOut}>Sign out</button>
            </div>

            <form
                onSubmit={createItem}
                style={{ display: "grid", gap: 8, marginTop: 16 }}
            >
                <input
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                    }
                />
                <input
                    placeholder="Artist"
                    value={form.artist}
                    onChange={(e) =>
                        setForm({ ...form, artist: e.target.value })
                    }
                />
                <input
                    placeholder="URL"
                    value={form.url}
                    onChange={(e) => setForm({ ...form, url: e.target.value })}
                />
                <input
                    placeholder="Cover URL"
                    value={form.cover_url}
                    onChange={(e) =>
                        setForm({ ...form, cover_url: e.target.value })
                    }
                />
                <label
                    style={{ display: "flex", gap: 8, alignItems: "center" }}
                >
                    <input
                        type="checkbox"
                        checked={form.published}
                        onChange={(e) =>
                            setForm({ ...form, published: e.target.checked })
                        }
                    />
                    Published
                </label>
                <input
                    type="number"
                    placeholder="Sort Index"
                    value={form.sort_index}
                    onChange={(e) =>
                        setForm({ ...form, sort_index: e.target.value })
                    }
                />
                <button type="submit">Add</button>
            </form>

            <hr style={{ margin: "24px 0" }} />

            <ul style={{ display: "grid", gap: 12 }}>
                {list.map((item) => (
                    <li
                        key={item.id}
                        style={{ border: "1px solid #ddd", padding: 12 }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 12,
                            }}
                        >
                            <div>
                                <strong>{item.title}</strong> — {item.artist}
                                {!item.published && " (unpublished)"}
                                <div style={{ fontSize: 12, color: "#666" }}>
                                    sort: {item.sort_index}{" "}
                                    {item.url && (
                                        <>
                                            |{" "}
                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                link
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: 8 }}>
                                <button
                                    onClick={() =>
                                        updateItem(item.id, {
                                            published: !item.published,
                                        })
                                    }
                                >
                                    {item.published ? "Unpublish" : "Publish"}
                                </button>
                                <button
                                    onClick={() =>
                                        updateItem(item.id, {
                                            sort_index: item.sort_index - 1,
                                        })
                                    }
                                >
                                    ↑
                                </button>
                                <button
                                    onClick={() =>
                                        updateItem(item.id, {
                                            sort_index: item.sort_index + 1,
                                        })
                                    }
                                >
                                    ↓
                                </button>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    style={{ color: "crimson" }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
