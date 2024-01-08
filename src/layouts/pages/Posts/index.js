// Page components
import BaseLayout from "layouts/sections/components/BaseLayout";
// import View from "layouts/sections/components/View";
import Posts from "pages/LandingPages/AboutUs/sections/Posts";

function Blogs() {
  return (
    <BaseLayout
      title=""
      breadcrumb={[
        { label: "AI Club", route: "pages/LandingPages/AboutUs/sections/Posts" },
        { label: "Blogs" },
      ]}
    >
      <Posts />
      {/* <View>
        <Posts />
      </View> */}
    </BaseLayout>
  );
}

export default Blogs;
