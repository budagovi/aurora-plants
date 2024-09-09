// --- ui
import MaxWidthBox from "@/UI/MaxWidthBox";
// --- components
import Categories from "@/components/Home Page/CategoriesGrid";

const RootPage = () => {
  return (
    <MaxWidthBox component='main' contentWrapper>
      <Categories />
    </MaxWidthBox>
  );
}

export default RootPage
