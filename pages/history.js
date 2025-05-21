// pages/history.js
import Head from 'next/head'
import Navbar from '../components/navbar8'
import Footer from '../components/footer4'

export default function History() {
  return (
    <>
      <Head>
        <title>Our History | Diaspora Community</title>
        <meta
          name="description"
          content="Learn about the origins and heritage of our diaspora community."
        />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-primary1">Our History</h1>

        <p className="mb-6 text-gray-700">
          Our community traces its roots back to the early 1900s, when families
          from our homeland began settling abroad in search of new opportunities.
          Over generations, we've preserved traditions, language, and customs
          through cultural festivals, storytelling, and intergenerational
          gatherings.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-primary2">Founding Era</h2>
          <p className="text-gray-700">
            In 1910, the first group arrived in London, forming the “Homeland Society”
            to support newcomers. They held monthly meetings, shared recipes, and
            celebrated traditional holidays in community centers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-primary2">Growth & Expansion</h2>
          <p className="text-gray-700">
            By the 1950s, our community had chapters in Paris, Toronto, and Nairobi.
            These chapters published newsletters, ran language classes, and organized
            annual cultural festivals drawing hundreds of attendees.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-primary2">Today</h2>
          <p className="text-gray-700">
            Now, our Diaspora Community spans over 20 countries worldwide. We’ve
            embraced digital tools—online forums, virtual meetups, and shared media—
            to keep everyone connected, no matter where they live.
          </p>
        </section>

        <div className="mt-10">
          <a href="/timeline" className="text-blue-600 hover:underline">
            ▶️ View our full timeline of key events
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
