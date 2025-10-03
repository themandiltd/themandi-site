"use client";
import Image from "next/image";
import filterUpcomingShows from "@/lib/CleanShows";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TourWindow({ clickFx, handleSignup, dates }) {
    // Dummy show data
    const shows = [
        { date: "Aug 19, 2025", venue: "Polaris Hall", city: "Portland, OR" },
        {
            date: "Aug 20, 2025",
            venue: "Downtown Summer Sounds @ Railroad Way North",
            city: "Seattle, WA",
            url: "www.google.com",
        },
        {
            date: "Oct 10, 2025",
            venue: "Songbyrd",
            city: "Washington, DC",
            url: "www.google.com",
        },
        {
            date: "Oct 11, 2025",
            venue: "Ruba",
            city: "Philadelphia, PA",
            url: "www.google.com",
        },
        {
            date: "Oct 13, 2025",
            venue: "Music Hall of Williamsburg",
            city: "Brooklyn, NY",
            url: "www.google.com",
        },
        {
            date: "Oct 15, 2025",
            venue: "The Drake Underground",
            city: "Toronto, ON",
            url: "www.google.com",
        },
    ];

    const tourDates = dates.data;

    const cleanedShows = filterUpcomingShows(shows);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-screen w-full fixed z-40 p-6 sm:p-10 flex items-center justify-center"
        >
            {/* TextEdit Window */}
            <div
                className="mx-auto w-full max-w-[600px] rounded-md overflow-scroll bg-neutral-50"
                style={{
                    boxShadow: "1px -1px 119px 0px rgba(0,0,0,0.75)",
                    filter: "blur(0.7px)",
                }}
            >
                {/* Title bar */}
                <div className="relative flex items-center gap-3 px-2 py-2 bg-neutral-100 border-b border-neutral-200 select-none">
                    {/* traffic light */}
                    <div className="flex items-center gap-2" onClick={clickFx}>
                        <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57] hover:bg-[#f72116] transition cursor-pointer z-10 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]"></span>
                    </div>
                    {/* window title */}
                    <div className="absolute inset-x-0 text-center">
                        <span className="inline-block font-sans rounded px-2 text-[13px] text-neutral-700 font-bold">
                            Tour Dates
                        </span>
                    </div>
                </div>

                {/* Toolbar */}
                <Image
                    className="w-full border-b border-neutral-200 cursor-not-allowed"
                    src="/text-header.png"
                    width={1000}
                    quality={100}
                    height={100}
                />

                {/* Document page */}
                <div className="bg-neutral-200/70 h-[400px] sm:h-[600px] overflow-scroll">
                    <div
                        className="mx-auto  min-h-[600px] bg-white shadow-md ring-1 ring-black/5 p-2"
                        style={{
                            fontFamily: "Times New Roman, Times, serif",
                            lineHeight: 0.5,
                        }}
                    >
                        <div className="text-[14px] md:text-[16px] leading-[1] text-black">
                            {tourDates.length > 0 ? (
                                <>
                                    <p className="mb-8">Tour Dates</p>
                                    <div className="flex flex-col gap-8 pb-24">
                                        {tourDates.map((evt) => {
                                            const a = evt.attributes || {};

                                            // hyphenated keys -> bracket notation
                                            const href =
                                                a["primary-link-url"] ||
                                                a["promoted-link-url"] ||
                                                a["vip-link-url"] ||
                                                "#";

                                            const dateStr =
                                                a["starts-at-date-local"] ||
                                                a["starts-at-date"] ||
                                                null;

                                            const date = dateStr
                                                ? new Date(dateStr)
                                                : null; // format as you like
                                            const dateLabel = date
                                                ? date.toLocaleDateString(
                                                      undefined,
                                                      {
                                                          weekday: "short",
                                                          month: "short",
                                                          day: "numeric",
                                                          year: "numeric",
                                                      }
                                                  )
                                                : "TBA";

                                            const venue =
                                                a["venue-display-name"] ||
                                                a["venue-name"] ||
                                                "Venue TBA";
                                            const city =
                                                a["venue-formatted-address"] ||
                                                a["venue-state-or-province"] ||
                                                "";

                                            const soldOut = a["is-sold-out"];

                                            return (
                                                <div key={evt.id}>
                                                    <a
                                                        href={href}
                                                        className={`space-y-0 hover:underline cursor-pointer mb-4 hover:text-blue-700 ${
                                                            soldOut
                                                                ? "line-through pointer-events-none"
                                                                : ""
                                                        }`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <p>{dateLabel}</p>
                                                        <p>{venue}</p>
                                                        <p>{city}</p>
                                                    </a>
                                                    {soldOut && <p>sold out</p>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>
                            ) : (
                                <span>
                                    No shows currently scheduled;&nbsp;
                                    <span
                                        onClick={handleSignup}
                                        className="text-[#0059FF] hover:underline cursor-pointer"
                                    >
                                        <span className="sm:inline hidden">
                                            click
                                        </span>
                                        <span className="sm:hidden inline">
                                            tap
                                        </span>{" "}
                                        here to get notified
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
