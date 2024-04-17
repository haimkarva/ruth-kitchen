export default function Home() {
  return (
    <main className="md:w-full bg-red-400 h-screen">
      <video
        src="/bg-vid.mp4"
        autoPlay
        loop
        muted
        className="object-cover w-screen h-screen z-10 relative"
      />
      <div className="z-20 absolute flex flex-col top-1/3 left-1/4 w-1/2 bg-gray-100  ">
        <h1 className="text-4xl text-blue-600 text-center">
          Welcome to Ruth Kitchen
        </h1>
        <p className="text-xl p-3 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          dolores, doloremque porro commodi velit voluptates repudiandae quos
          distinctio maiores reprehenderit similique, consequuntur perspiciatis
          unde sed aliquam reiciendis. Suscipit, magnam dolorum? Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Perferendis, dolores,
          doloremque porro commodi velit voluptates repudiandae quos distinctio
          maiores reprehenderit similique, consequuntur perspiciatis unde sed
          aliquam reiciendis. Suscipit, magnam dolorum?
        </p>
      </div>
    </main>
  );
}
