import AppButton from "@/components/atom/AppButton";
import SubHeader from "@/components/atom/SubHeader";
import CategoryType from "@/components/molecule/CategoryType";
import { titleData } from "@/data";

const InterestPage = () => {
  return (
    <div>
      <SubHeader title="Share your interests with us" />
      <div className="px-[6.25rem]">
        <p className="text-[1.5rem] mb-[1.875rem]">
          Choose your interests below to get personalized event suggestions.
        </p>
        <div className="mb-[8.125rem]">
          {titleData.map((item, index) => (
            <CategoryType key={index} {...item} />
          ))}
        </div>
        <div className="mb-[5.625rem] flex justify-end">
          <AppButton text="Save my Interests" />
        </div>
      </div>
    </div>
  );
};

export default InterestPage;
