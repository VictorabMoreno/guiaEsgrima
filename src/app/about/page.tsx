import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'

const meta = {
  title: 'About Me',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="text-gray-600">Welcome to the about page</p>

  <form className="space-y-4">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm font-medium text-2xM mb-1">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="p-2 border bg-zinc-800/5 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter your name"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-medium text-2xM mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="p-2 border bg-zinc-800/5 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter your email"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="message" className="text-sm font-medium text-2xM mb-1">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="4"
        className="p-2 border bg-zinc-800/5 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter your message"
      ></textarea>
    </div>

    <div className="flex items-center">
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        Submit
      </button>
    </div>
  </form>
</div>

  )
}
