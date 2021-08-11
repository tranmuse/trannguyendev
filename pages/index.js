import Head from "next/head"
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    // let { title, cats } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <div>
          <section class="bg-gray-900 text-gray-200">
            <div class="container flex flex-col px-5 py-12 mx-auto lg:items-center">
              <div class="flex flex-col w-full mb-12 text-left lg:text-center">
                <h2 class="mb-4 text-xs font-semibold tracking-widest uppercase">Tran Nguyen Dev</h2>
                <h1 class="mb-6 text-2xl font-semibold tracking-tighter sm:text-5xl">I learn. I fail. I share.</h1>
                <p class="mx-auto text-base font-medium leading-relaxed lg:w-2/3">Hi, I'm Tran Nguyen. I'm just simply a learner. I'm enthusiastic about software development, 3D Design, 3D Animation, 3D Printing, and much more. </p>
              </div>
            </div>
          </section>
          <section class="bg-gray-900">
            <div class="container flex flex-col items-center justify-center px-10 pb-24 mx-auto rounded-lg lg:-mt-12 lg:px-40">
              <img class="object-cover object-center w-full shadow-xl rounded-xl" alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/>
            </div>
          </section>

          <div class="container items-center">
            <footer class="text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
              <div class="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
                <a href="/" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                  <div class="inline-flex items-center">
                    <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
                    </div>
                    <h2 class="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> wickedblocks </h2>
                  </div>
                </a>
                <span class="inline-flex justify-center mt-2 mr-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a class="text-blue-500 hover:text-black">
                  <FontAwesomeIcon icon="facebook" />
                  </a>
                  <a class="ml-3 text-blue-500 hover:text-black">
                  </a>
                  <a class="ml-3 text-blue-500 hover:text-black">
                  </a>
                  <a class="ml-3 text-blue-500 hover:text-black">
                  </a>
                </span>
              </div>
            </footer>
          </div>
        </div>
        {/* <article>
          <h1 className="text-green-500">{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article> */}
      </>
    )
  }
}