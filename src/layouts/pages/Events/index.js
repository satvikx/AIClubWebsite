// Page components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import DesignBlocks from "pages/LandingPages/AboutUs/sections/DesignBlocks";

function Events() {
  return (
    <BaseLayout
      title="Events"
      breadcrumb={[
        { label: "AI Club", route: "pages/LandingPages/AboutUs/sections/DesignBlocks" },
        { label: "Events" },
      ]}
    >
      <View>
        <DesignBlocks />
      </View>
    </BaseLayout>
  );
}

export default Events;
