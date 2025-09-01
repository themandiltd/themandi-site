// pages/music.js
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import CoverArt from "@/components/CoverArt";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

export async function getServerSideProps() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data, error } = await supabase
    .from("music")
    .select("id,title,artist,url,cover_url,published,sort_index,created_at")
    .eq("published", true)
    .order("sort_index", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error.message);
  }

  return {
    props: {
      music: data || [],
    },
  };
}

export default function MusicPage({ music }) {
  return (
    <div className="h-screen w-full overscroll-none overflow-hidden relative">
      <Navbar />

      {/* Back button */}
      <div className="w-full h-fit flex justify-end absolute items-end">
        <Link
          href="/"
          className="cursor-pointer hover:opacity-80 transition mr-8 mt-8 h-fit"
        >
          <Image src="/back.svg" width={80} height={100} alt="back" />
        </Link>
      </div>

      {/* Contents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full h-screen flex items-center justify-center"
      >
        {/* Gallery */}
        <div className="flex flex-row flex-nowrap w-full overflow-x-auto gap-6 px-6 py-4">
          {music.length === 0 ? (
            <div className="w-full text-center opacity-70">No music yet.</div>
          ) : (
            music.map((m) => (
              // If CoverArt supports only {src, title}, keep it minimal:
              // If it supports click-through, you can wrap with <Link href={m.url || "#"}>...</Link>
              <CoverArt
                key={m.id}
                src={m.cover_url || "/placeholder.png"}
                title={m.title}
              />
            ))
          )}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
