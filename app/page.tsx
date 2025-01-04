import UrlShortenerContainer from "@/components/url-shortener-container";

export default function Home() {
  return (
  <main className='mx-auto max-w-xl py-12 md:py-24 space-y-6'>
    <div>
       <h1 className= 'text-3xl md:text-4xl font-bold'>URL Shortener</h1>
       <p className='md:text-lg'>shorten your URLs and share them easily</p>
    </div>
<UrlShortenerContainer/>
  </main>

  );
}
