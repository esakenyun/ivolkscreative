import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { LuMoreVertical } from "react-icons/lu";
import VideoPreview from "../modal/videoPreview";
import Image from "next/image";

export default function StoryTelling() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  const data = [
    {
      id: 1,
      title: "D'Divo - Cinta Separuh Jiwa - Music Video",
      thumbnailUrl: "/thumbnail/coba.jpg",
      link: "https://www.youtube.com/embed/aaiAm2Hp_1k?si=r4cbgfPkGnIc5pIx",
      duration: "01:15",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eos a. Porro aperiam reiciendis atque error, impedit illo neque quas consequatur perferendis, soluta quasi, libero ipsam consequuntur facere eaque asperiores voluptatem. Doloribus, vitae aspernatur nobis ipsam accusantium autem ullam odit, eaque esse sequi voluptatum doloremque excepturi magni mollitia aut temporibus, suscipit voluptatem alias ea dignissimos necessitatibus minima molestiae maiores? Cumque, soluta natus laborum blanditiis deleniti labore suscipit ipsa aliquam repudiandae beatae ducimus nihil quaerat recusandae dolor! Numquam minus aut nostrum ex eum atque quas dolore nesciunt velit? Accusantium numquam voluptatum illum quia dolor, repudiandae animi quas quos officiis totam rem facilis veritatis laborum cum nesciunt sequi adipisci eius perspiciatis minima delectus consectetur tempore sed dolore laudantium. Reiciendis, voluptatum ratione consectetur aliquam fugiat vel. Ipsam quibusdam quo hic, accusantium accusamus quisquam consequuntur aspernatur dolorem doloribus voluptatum aperiam ratione ad perferendis rerum nihil suscipit non ipsa nisi beatae illum. Nam fugit cumque iste sapiente, vitae exercitationem quibusdam soluta ullam corrupti hic voluptate maxime provident repellat magnam nesciunt eum nihil? Blanditiis omnis quidem molestias id amet at aliquam aperiam optio! Doloribus neque quia ipsum voluptatum hic nisi ad, aliquid praesentium! Voluptatum, voluptate reiciendis quae cum tempore tenetur impedit quas eveniet! Iste, vitae illo.",
    },
    {
      id: 2,
      title: "Kau & Dia Movie - Trailer",
      thumbnailUrl: "/thumbnail/coba2.jpg",
      link: "https://www.youtube.com/embed/OwirIovwMoQ?si=2c9W62Z7-7acnONy",
      duration: "01:15",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eos a. Porro aperiam reiciendis atque error, impedit illo neque quas consequatur perferendis, soluta quasi, libero ipsam consequuntur facere eaque asperiores voluptatem. Doloribus, vitae aspernatur nobis ipsam accusantium autem ullam odit, eaque esse sequi voluptatum doloremque excepturi magni mollitia aut temporibus, suscipit voluptatem alias ea dignissimos necessitatibus minima molestiae maiores? Cumque, soluta natus laborum blanditiis deleniti labore suscipit ipsa aliquam repudiandae beatae ducimus nihil quaerat recusandae dolor! Numquam minus aut nostrum ex eum atque quas dolore nesciunt velit? Accusantium numquam voluptatum illum quia dolor, repudiandae animi quas quos officiis totam rem facilis veritatis laborum cum nesciunt sequi adipisci eius perspiciatis minima delectus consectetur tempore sed dolore laudantium. Reiciendis, voluptatum ratione consectetur aliquam fugiat vel. Ipsam quibusdam quo hic, accusantium accusamus quisquam consequuntur aspernatur dolorem doloribus voluptatum aperiam ratione ad perferendis rerum nihil suscipit non ipsa nisi beatae illum. Nam fugit cumque iste sapiente, vitae exercitationem quibusdam soluta ullam corrupti hic voluptate maxime provident repellat magnam nesciunt eum nihil? Blanditiis omnis quidem molestias id amet at aliquam aperiam optio! Doloribus neque quia ipsum voluptatum hic nisi ad, aliquid praesentium! Voluptatum, voluptate reiciendis quae cum tempore tenetur impedit quas eveniet! Iste, vitae illo.",
    },
    {
      id: 3,
      title: "FIFGROUP - Transition Bumper",
      thumbnailUrl: "/thumbnail/coba3.jpg",
      link: "https://www.youtube.com/embed/ODupVm_qs54?si=ri4m3NhNonNX7WkE",
      duration: "01:15",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eos a. Porro aperiam reiciendis atque error, impedit illo neque quas consequatur perferendis, soluta quasi, libero ipsam consequuntur facere eaque asperiores voluptatem. Doloribus, vitae aspernatur nobis ipsam accusantium autem ullam odit, eaque esse sequi voluptatum doloremque excepturi magni mollitia aut temporibus, suscipit voluptatem alias ea dignissimos necessitatibus minima molestiae maiores? Cumque, soluta natus laborum blanditiis deleniti labore suscipit ipsa aliquam repudiandae beatae ducimus nihil quaerat recusandae dolor! Numquam minus aut nostrum ex eum atque quas dolore nesciunt velit? Accusantium numquam voluptatum illum quia dolor, repudiandae animi quas quos officiis totam rem facilis veritatis laborum cum nesciunt sequi adipisci eius perspiciatis minima delectus consectetur tempore sed dolore laudantium. Reiciendis, voluptatum ratione consectetur aliquam fugiat vel. Ipsam quibusdam quo hic, accusantium accusamus quisquam consequuntur aspernatur dolorem doloribus voluptatum aperiam ratione ad perferendis rerum nihil suscipit non ipsa nisi beatae illum. Nam fugit cumque iste sapiente, vitae exercitationem quibusdam soluta ullam corrupti hic voluptate maxime provident repellat magnam nesciunt eum nihil? Blanditiis omnis quidem molestias id amet at aliquam aperiam optio! Doloribus neque quia ipsum voluptatum hic nisi ad, aliquid praesentium! Voluptatum, voluptate reiciendis quae cum tempore tenetur impedit quas eveniet! Iste, vitae illo.",
    },
    {
      id: 4,
      title: "SKZP - Semangat Zaman Now",
      thumbnailUrl: "/thumbnail/coba4.jpg",
      link: "https://www.youtube.com/embed/Z4_cyuYQStY?si=IWcplbocOcEWN_8l",
      duration: "01:15",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eos a. Porro aperiam reiciendis atque error, impedit illo neque quas consequatur perferendis, soluta quasi, libero ipsam consequuntur facere eaque asperiores voluptatem. Doloribus, vitae aspernatur nobis ipsam accusantium autem ullam odit, eaque esse sequi voluptatum doloremque excepturi magni mollitia aut temporibus, suscipit voluptatem alias ea dignissimos necessitatibus minima molestiae maiores? Cumque, soluta natus laborum blanditiis deleniti labore suscipit ipsa aliquam repudiandae beatae ducimus nihil quaerat recusandae dolor! Numquam minus aut nostrum ex eum atque quas dolore nesciunt velit? Accusantium numquam voluptatum illum quia dolor, repudiandae animi quas quos officiis totam rem facilis veritatis laborum cum nesciunt sequi adipisci eius perspiciatis minima delectus consectetur tempore sed dolore laudantium. Reiciendis, voluptatum ratione consectetur aliquam fugiat vel. Ipsam quibusdam quo hic, accusantium accusamus quisquam consequuntur aspernatur dolorem doloribus voluptatum aperiam ratione ad perferendis rerum nihil suscipit non ipsa nisi beatae illum. Nam fugit cumque iste sapiente, vitae exercitationem quibusdam soluta ullam corrupti hic voluptate maxime provident repellat magnam nesciunt eum nihil? Blanditiis omnis quidem molestias id amet at aliquam aperiam optio! Doloribus neque quia ipsum voluptatum hic nisi ad, aliquid praesentium! Voluptatum, voluptate reiciendis quae cum tempore tenetur impedit quas eveniet! Iste, vitae illo.",
    },
  ];

  const handlePlay = (item) => {
    setCurrentVideo(item);
    setIsPlaying(true);
  };

  const getVideoUrl = (link) => {
    const url = new URL(link);
    url.searchParams.set("autoplay", "1");
    return url.toString();
  };

  const handlePlayClick = (item) => {
    setCurrentVideo(item);
    setModalOpen(true);
  };

  return (
    <>
      <div className="py-5 bg-[#f7f7f7]">
        <p className="uppercase text-center font-semibold text-3xl">Commercial - Storytelling</p>
        <div className="my-4 flex justify-center items-center">
          <hr className="border-t border-black w-10" />
        </div>
        <p className="text-center font-light">
          Storytelling ads with more than 60 seconds of durations. <br />
          <span className="italic">Iklan-iklan panjang yang bercerita, durasi di atas 60 detik.</span>
        </p>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center gap-2 py-3 px-3 cursor-pointer">
          <LuMoreVertical />
          <p className="uppercase">Commercial - Storytelling</p>
        </div>
        <div className="px-4 space-x-8 pb-16">
          <div className="grid grid-cols-4 gap-2">
            {data.map((item) => (
              <div key={item.id} className="h-[12vw] relative">
                {item.thumbnailUrl ? (
                  <div className="relative h-full">
                    <Image src={item.thumbnailUrl} className="object-cover transition duration-300  w-full h-full" alt={item.title} width={500} height={500} />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 " />
                    <a onClick={() => handlePlayClick(item)} className="absolute inset-0 flex gap-3 items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition duration-300">
                      <div className="cursor-pointer flex gap-3 items-center hover:opacity-65">
                        <FaRegCirclePlay />
                        Play Video
                      </div>
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-200 rounded-md">
                    <p className="text-gray-500">No Image Available</p>
                  </div>
                )}
                <div className="text-center mt-2 font-semibold title">{item.title || "Untitled"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-between gap-2 py-3 px-3 cursor-pointer text-white bg-black">
          <p className="uppercase">Commercial - Storytelling</p>
          <LuMoreVertical />
        </div>

        <div className="flex flex-col gap-2">
          {data.map((item) => (
            <div key={item.id} className="relative bg-black py-5">
              {isPlaying && currentVideo.id === item.id ? (
                <iframe src={getVideoUrl(item.link)} title={item.title} className="w-full h-48" allow="autoplay; fullscreen" />
              ) : item.thumbnailUrl ? (
                <div className="relative">
                  <Image src={item.thumbnailUrl} className="object-cover w-full h-48" alt={item.title} width={500} height={500} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <p className="text-white">Ivolks Creative</p>
                    <p className="text-white text-2xl underline font-bold bg-opacity-50 px-2 rounded text-center">{item.title}</p>
                    <div onClick={() => handlePlay(item)} className="flex gap-2 items-center cursor-pointer text-white">
                      <FaRegCirclePlay className="text-2xl" />
                      <p className="text-sm">Play Video</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-48 bg-gray-200 rounded-md">
                  <p className="text-gray-500">No Image Available</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <VideoPreview isOpen={isModalOpen} onClose={() => setModalOpen(false)} initialItem={currentVideo} items={data} />
    </>
  );
}
