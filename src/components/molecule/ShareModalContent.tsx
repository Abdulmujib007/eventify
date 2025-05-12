"use client";

import Image from "next/image";
import ShareToSocials from "../atom/ShareToSocials";

import { useState } from "react";

export default function ShareModalContent() {
  const [copy, setCopy] = useState(false);

  const url = "Mj-et-catalyst-eventify.app/event-path1/let fucking go";

  const shareToWhatsApp = () => {
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      url
    )}`;
    window.open(whatsappURL, "_blank");
  };
  const shareToFacebook = () => {
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookURL, "_blank");
  };
  const shareToTwitter = () => {
    const twitterURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}`;
    window.open(twitterURL, "_blank");
  };
  const shareToLinkedIn = () => {
    const linkedInURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`;
    window.open(linkedInURL, "_blank");
  };
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className="bg-white mt-[40%] pb-[4rem] w-full ">
      <header className="font-semibold text-[1.75rem] py-5 border-b-[1px] border-b-[#A9A9A9] text-tifyPurple text-center">
        Share with friends
      </header>
      <section className="flex justify-center gap-5 mt-12 mb-8">
        <ShareToSocials imgSrc="/logos_facebook.svg" share={shareToFacebook} />
        <ShareToSocials imgSrc="/Vector (11).svg" share={shareToTwitter} />
        <ShareToSocials
          imgSrc="/logos_whatsapp-icon.svg"
          share={shareToWhatsApp}
        />
        <ShareToSocials
          imgSrc="/devicon_linkedin.svg"
          share={shareToLinkedIn}
        />
      </section>
      <section className="w-full">
        <div className="  mx-[5.5rem] border-[1px] border-[#A9A9A9] border-opacity-50 px-4 py-3 flex justify-between ">
          <p className="flex flex-col max-w-[80%] ">
            <span className="text-lg text-tifyPurple">Event URL</span>
            <span className=" truncate whitespace-nowrap  text-lg font-semibold overflow-hidden text-ellipsis ">
              {url}
            </span>
          </p>
          <button
            onClick={handleCopy}
            className="p-4 cursor-pointer hover:bg-gray-300 rounded-full shrink-0"
          >
            <Image
              src={"/carbon_copy.svg"}
              alt="copy-icon"
              width={30}
              height={30}
            />
          </button>
        </div>
        <p className="h-1 flex justify-end mx-[5.5rem]">
          {copy && (
            <span className="text-sm text-tifyPurple">
              link copied to clipboard
            </span>
          )}
        </p>
      </section>
    </div>
  );
}
