// --- ui
import MaxWidthBox from "@/UI/MaxWidthBox";
// --- components
import Categories from "@/components/Home Page/CategoriesGrid";
import Services from "@/components/Home Page/Services";

const RootPage = () => {
  return (
    <MaxWidthBox component='main' contentWrapper>
      <Categories />
      <Services />
    </MaxWidthBox>
  );
}

export default RootPage
