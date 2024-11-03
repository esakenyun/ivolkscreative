export default function Contact() {
  return (
    <div id="contact" className="py-10 bg-[#f7f7f7]">
      <div className="flex flex-col md:flex-row justify-center gap-8 px-10 lg:px-20">
        <div className="w-full text-right">
          <p className="uppercase text-[#df334e] font-bold">Contact US</p>
          <p className="font-extrabold text-3xl md:text-5xl py-2">Let&apos;s Get In Touch!</p>
          <p className="py-3 text-xl">Whether you&apos;re a client looking for a production partner, a budding storyteller, or someone simply moved by our mission, we want to hear from you!</p>
          <p className="uppercase pt-2 font-bold text-lg">PT Involks Creative Indonesia</p>
          <p className="py-1">
            Jalan Pangkalan Asem No. 17 <br />
            DKI Jakarta, Indonesia <br />
            <span className="font-bold">P. </span>+62 21 421 1094 <br />
            <span className="font-bold">E.</span>info@studioantelope.com
          </p>
        </div>
        <div className="w-full">
          <form action="#">
            <div>
              <div className="flex items-center gap-0.5">
                <p className="font-semibold">Name</p>
                <span className="text-red-500">*</span>
              </div>
              <div className="flex gap-5 w-full">
                <div className="flex flex-col md:w-full">
                  <input type="text" className="p-2 border border-gray-200 focus:border-gray-500 w-full" required />
                  <p className="text-sm opacity-60">First</p>
                </div>
                <div className="flex flex-col md:w-full">
                  <input type="text" className="p-2 border border-gray-200 focus:border-gray-500 w-full" required />
                  <p className="text-sm opacity-60">Last</p>
                </div>
              </div>
              <div className="py-3">
                <div className="flex items-center gap-0.5">
                  <p className="font-semibold">Email</p>
                  <span className="text-red-500">*</span>
                </div>
                <input type="email" className="p-2 w-full border border-gray-200 focus:border-gray-500" required />
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  <p className="font-semibold">Purpose</p>
                  <span className="text-red-500">*</span>
                </div>
                <select name="purpose" id="purpose" className="w-full p-2 border border-gray-200" required>
                  <option value="create_branded_video">Create Branded Video</option>
                  <option value="screening_inquires">Screening Inquires</option>
                  <option value="career_inquires">Career Inquires</option>
                  <option value="just_say_hello">Just Say Hello</option>
                </select>
              </div>
              <div className="py-3">
                <div className="flex items-center gap-0.5">
                  <p className="font-semibold">Comment or Message</p>
                  <span className="text-red-500">*</span>
                </div>
                <textarea name="comment_message" id="comment_message" className="w-full border border-gray-300" rows={5} required></textarea>
              </div>
              <button className="uppercase bg-[#df334d] text-white py-4 px-5 font-semibold text-lg rounded-md hover:bg-red-400">Begin Inquiry</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
