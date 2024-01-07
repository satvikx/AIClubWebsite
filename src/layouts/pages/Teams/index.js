// Page components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import Team from "pages/LandingPages/AboutUs/sections/Teams";

function Teams() {
  return (
    <BaseLayout
      title="The Core Team"
      breadcrumb={[
        { label: "AI Club", route: "pages/LandingPages/AboutUs/sections/Team" },
        { label: "Team" },
      ]}
    >
      <View>
        <Team />
      </View>
    </BaseLayout>
  );
}

export default Teams;
