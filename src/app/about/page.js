import React from 'react'
import MyTitle from '@/components/MyTitle'
import MyButton from '@/components/MyButton'

const page = () => {
  return (
    <div className="p-10 flex flex-col items-start gap-6">
      <MyTitle>About This Movie Site</MyTitle>
      <section className="text-lg max-w-xl">
        <h2 className="text-2xl font-bold mb-2">Purpose</h2>
        <p>
          This site is a demo project to practice React and Next.js skills, and to share a love for action movies!
        </p>
      </section>
      <section className="text-lg max-w-xl">
        <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
        <ul className="list-disc ml-6">
          <li>Next.js 14 (App Router)</li>
          <li>React 18</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>
      <section className="text-lg max-w-xl">
        <h2 className="text-2xl font-bold mb-2">Features</h2>
        <ul className="list-disc ml-6">
          <li>Browse a curated list of action movies</li>
          <li>See favorite movies</li>
          <li>Responsive design</li>
          <li>Reusable components</li>
        </ul>
      </section>
      <section className="text-lg max-w-xl">
        <h2 className="text-2xl font-bold mb-2">Credits</h2>
        <p>
          Movie data and images are for demo purposes only. Built by Prakash With ❤.
        </p>
      </section>
      <section className="text-lg max-w-xl">
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p>
          <a href="mailto:rsivsaiprakash121@gmail.com" className="underline text-blue-400">rsivsaiprakash121@gmail.com</a>
        </p>
      </section>
      <section className="text-lg max-w-xl">
        <h2 className="text-2xl font-bold mb-2">Future Plans</h2>
        <ul className="list-disc ml-6">
          <li>Movie details pages</li>
          <li>User reviews and ratings</li>
          <li>Search and filter functionality</li>
          <li>Add Images to movies</li>
        </ul>
      </section>
      <MyButton linkText={'/'} buttonText={'Go Home'} />
    </div>
  )
}

export default page
