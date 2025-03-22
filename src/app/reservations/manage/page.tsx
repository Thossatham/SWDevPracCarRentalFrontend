export default function ManageReservations({
    dashboard,
    manage,
}: {
    dashboard: React.ReactNode;
    manage: React.ReactNode;
}) {
    return (
        <main className="text-center text-lg">
            <div>Manage Your Reservation</div>
            <section>{dashboard}</section>
            <section>{manage}</section>
        </main>
    );
}