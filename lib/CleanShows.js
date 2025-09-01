// Todo
export default function filterUpcomingShows(shows) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to the start of the day for accurate comparison

    return shows.filter((show) => {
        const showDate = new Date(show.date);
        showDate.setHours(0, 0, 0, 0); // Set to the start of the day for accurate comparison
        return showDate >= today;
    });
}
