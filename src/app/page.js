import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-between p-24">
      <div className="card-wraper flex lg:w-full flex-wrap  justify-between space-y-8 lg:space-y-0">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
