"use client";
import EventHero from "@/components/atom/EventHero";
import SortBySection from "@/components/atom/SortBySection";
import CheckBoxSection from "@/components/molecule/CheckBoxSection";
import EventCard from "@/components/molecule/EventCard";
import { eventData } from "@/data";

function EventPage() {
  return (
    <div>
      <div className="bg-[#2B293D] pt-[9.375rem] pb-[7.5rem]">
        <EventHero />
      </div>
      <div className="px-[6.25rem] mt-[3.75rem] flex ">
        <div className="border-r-1 border-[#6F6F6F] h-fit pb-[18.1875rem]">
          <p className="font-semibold text-[2rem] mb-[0.625rem]">Filters</p>
          <CheckBoxSection
            showMoreText={false}
            title="Price"
            initialOptions={[
              { id: "option1", name: "Free", value: "Free", label: "Free" },
              { id: "option2", name: "Paid", value: "Paid", label: "Paid" },
            ]}
          />
          <CheckBoxSection
            title="Date"
            initialOptions={[
              { id: "option1", name: "Today", value: "Today", label: "Today" },
              {
                id: "option2",
                name: "Tomorrow",
                value: "Tomorrow",
                label: "Tomorrow",
              },
              {
                id: "option3",
                name: "This Week",
                value: "This Week",
                label: "This Week",
              },
              {
                id: "option4",
                name: "This Weekend",
                value: "This Weekend",
                label: "This Weekend",
              },
              {
                id: "option5",
                name: "Pick a Date",
                value: "Pick a Date",
                label: "Pick a Date",
              },
            ]}
            additionalOptions={[
              {
                id: "option6",
                name: "Next Week",
                value: "Next Week",
                label: "Next Week",
              },
              {
                id: "option7",
                name: "Next Weekend",
                value: "Next Weekend",
                label: "Next Weekend",
              },
              {
                id: "option8",
                name: "This Month",
                value: "This Month ",
                label: "This Month ",
              },
              {
                id: "option9",
                name: "Next Month",
                value: "Next Month",
                label: "Next Month",
              },
            ]}
          />
          <CheckBoxSection />
          <CheckBoxSection
            title="Format"
            initialOptions={[
              {
                id: "option1",
                name: "Community Engagement",
                value: "Community Engagement",
                label: "Community Engagement",
              },
              {
                id: "option2",
                name: "Concerts & Performances",
                value: "Concerts & Performances",
                label: "Concerts & Performances",
              },
              {
                id: "option3",
                name: "Conferences",
                value: "Conferences",
                label: "Conferences",
              },
              {
                id: "option4",
                name: "Experiential Events",
                value: "Experiential Events",
                label: "Experiential Events",
              },
              {
                id: "option5",
                name: "Festivals & Fairs",
                value: "Festivals & Fairs",
                label: "Festivals & Fairs",
              },
            ]}
            additionalOptions={[
              {
                id: "option6",
                name: "Games",
                value: "Games",
                label: "Games",
              },
              {
                id: "option7",
                name: "Health & Wellness",
                value: "Health & Wellness",
                label: "Health & Wellness",
              },
              {
                id: "option8",
                name: "Literary Arts",
                value: "Literary Arts",
                label: "Literary Arts",
              },
              {
                id: "option9",
                name: "Markets & Sales",
                value: "Markets & Sales",
                label: "Markets & Sales",
              },
              {
                id: "option10",
                name: "Museums",
                value: "Museums",
                label: "Museums",
              },
            ]}
          />
        </div>
        <div className="flex-grow">
          <div className=" flex justify-end ">
            <SortBySection onSortChange={(sortBy) => console.log(sortBy)} />
          </div>
          <div className="mt-[3.125rem] grid grid-cols-2 gap-x-6 gap-y-[3.8125rem] ml-[3.125rem] mb-[6.5625rem]">
            {eventData.map((event, index) => (
              <div key={index}>
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
