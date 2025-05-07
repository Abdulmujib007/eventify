import ContactInput from "@/components/atom/ContactInput";
import Image from "next/image";

function ContactPage() {
  return (
    <div className="h-full mb-12 ">
      <header className=" mt-[3rem] text-center mb-2.5 font-bold text-[2.5rem] text-black">
        Contact Us
      </header>
      <h1 className="font-medium text-lg text-[#717171] text-center">
        Any question or remarks? Just write us a message!
      </h1>
      <main className="bg-[#F5F5F5] mt-12 mx-[9rem] flex gap-12 rounded-3xl">
        <section className="my-2.5 ml-4 bg-tifyPurple py-[2.5rem] pl-[2.5rem]  text-[#717171] rounded-2xl w-[calc(37%-1.5rem)] ">
          <h1 className="font-semibold text-white text-[1.75rem] mb-1.5">
            Contact Information
          </h1>
          <span className="text-lg">Say something to start a live chat!</span>
          <div className="mt-28 mb-36 flex flex-col  gap-12">
            <div className="flex gap-6 items-center ">
              <Image
                src={"/bxs_phone-call.svg"}
                alt="phone-icon"
                width={18}
                height={18}
              />
              <span>+234 806 7484 632</span>
            </div>
            <div className="flex gap-6 items-center ">
              <Image
                src={"/Vector (6).svg"}
                alt="phone-icon"
                width={18}
                height={18}
              />
              <span>mujibasiyanbi@gmail.com</span>
            </div>
            <div className="flex gap-6 items-center ">
              <Image
                src={"/Vector (7).svg"}
                alt="phone-icon"
                width={18}
                height={18}
              />
              <span>Sango Ilorin Kwara State Nigeria.</span>
            </div>
          </div>
          <div className="flex gap-x-6">
            <Image
              src={"/Vector (8).svg"}
              alt="phone-icon"
              width={18}
              height={18}
            />
            <Image
              src={"/Group 1000001750.svg"}
              alt="phone-icon"
              width={18}
              height={18}
            />
            <Image
              src={"/Vector (9).svg"}
              alt="phone-icon"
              width={18}
              height={18}
            />
          </div>
        </section>
        <section className="w-[calc(63%-5.1rem)] mt-[3.75rem] mr-[2.5rem] ml-1 flex flex-col gap-11 ">
          <div className="flex gap-10 w-full">
            <div className="w-[calc(50%-1.25rem)]">
              <ContactInput text="First Name " placeholder="John" />
            </div>
            <div className="w-[calc(50%-1.25rem)]">
              <ContactInput text="Last Name " placeholder="Doe" />
            </div>
          </div>
          <div className="flex gap-10 w-full">
            <div className="w-[calc(50%-1.25rem)]">
              <ContactInput text="Email " placeholder="@gmail.com" />
            </div>
            <div className="w-[calc(50%-1.25rem)]">
              <ContactInput text="Phone Number" placeholder="+234" />
            </div>
          </div>
          <div>
            <header className="font-semibold text-lg">Select Subject</header>
            <div className="mt-3.5 ">
              <>
                <input className="" type="radio" name="general" id="general" />
                <label className="ml-2.5 text-sm " htmlFor="general">
                  General Inquiry
                </label>
              </>
              <>
                <input className="ml-10" type="radio" name="general" id="enquire" />
                <label className="ml-2.5 text-sm " htmlFor="enquire">
                  General Enquiry
                </label>
              </>
              <>
                <input className="ml-10" type="radio" name="general" id="Events" />
                <label className="ml-2.5 text-sm " htmlFor="Events">
                  General Events
                </label>
              </>
              <>
                <input className="ml-10" type="radio" name="general" id="Pricing" />
                <label className="ml-2.5 text-sm " htmlFor="Pricing">
                  General Pricing
                </label>
              </>
            </div>
          </div>
          <div className="w-full">
            <ContactInput placeholder="Write your message" text="Message" />
          </div>
          <div className="w-full flex justify-end">
            <button className="text-lg font-medium bg-tifyPurple text-white py-4 px-12 rounded-xl cursor-pointer">
              Send Message
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
