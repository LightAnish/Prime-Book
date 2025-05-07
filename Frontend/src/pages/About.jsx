import React from "react";


const About = () => {
  return (
    <div className="mt-10">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              About Prime Book
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
              Welcome to Prime Book, your go-to destination for discovering and
              exploring a curated collection of quality books. Whether you're a
              casual reader or a passionate bibliophile, Prime Book offers a
              seamless experience to browse, learn about, and engage with books
              across various genres. Our mission is to make reading more
              accessible, enjoyable, and connected for everyone. With
              user-friendly navigation, up-to-date listings, and personalized
              recommendations, Prime Book is where your next great read begins.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
              Prime Book started with a simple idea — to bring the joy of
              reading to life in a digital world that often overlooks it. What
              began as a passion project between friends who bonded over
              late-night book discussions turned into a platform for readers
              everywhere to discover stories that inspire, inform, and ignite
              imagination. We noticed how hard it was becoming to find great
              books without getting lost in cluttered platforms or unreliable
              reviews. So, we built Prime Book — a clean, focused space where
              readers can explore handpicked titles, dive into author insights,
              and connect with literature on a deeper level. Our journey is
              fueled by the belief that every great reader deserves a great book
              — and every book deserves to be found. From timeless classics to
              hidden gems, Prime Book is more than just a catalog; it's a
              growing community where stories live and readers thrive.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Alexa
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Olivia
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Liam
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured image"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Elijah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
